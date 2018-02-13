import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  semesterControl = new FormControl('', [Validators.required]);
  sectionControl = new FormControl('', [Validators.required]);

  semesterSelection = '0';
  sectionSelection = "";

  Semester = [
    {value: '3', viewValue: '3rd'},
    {value: '4', viewValue: '4th'},
    {value: '5', viewValue: '5th'},
    {value: '6', viewValue: '6th'},
    {value: '7', viewValue: '7th'},
    {value: '8', viewValue: '8th'}
  ]

  Section = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'}
  ]

  constructor(public authService: AuthService, private route: Router, public dialog: MatDialog) {
    this.message = '';
    if(authService.getUser()) {
      this.route.navigate(['/form']);
    }
  }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '330px',
      data: { }
    });
  }

  login(username: string) {
    this.message = '';
    if(this.semesterSelection != '0' && this.sectionSelection != '') {
        if(!this.authService.login(username,this.semesterSelection,this.sectionSelection)) {
          this.openDialog();
        } else {
          this.route.navigate(['/form']);
        }
      }
      else {
        this.openDialog();
      }
    return false;
  }
}
