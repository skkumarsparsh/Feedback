import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, private route: Router) {
    this.message = '';
    if(authService.getUser()) {
      this.route.navigate(['/form']);
    }
  }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function () {
        this.message = '';
      }.bind(this), 2500);
    } else {
      this.route.navigate(['/form']);
    }
    return false;
  }
}
