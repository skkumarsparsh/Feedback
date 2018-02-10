import { Component, OnInit } from '@angular/core';
import { Form } from '../form.model';
import { Http,Headers,RequestOptions,RequestMethod } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data;
  step = -1;

  Feedbacks = [
    {value: '0', viewValue: 'Excellent'},
    {value: '1', viewValue: 'Very Good'},
    {value: '2', viewValue: 'Good'},
    {value: '3', viewValue: 'Satisfactory'},
    {value: '4', viewValue: 'Bad'},
    {value: '1', viewValue: 'Very Bad'},
  ]

  model = new Form(1, '', '', 'http://');

  constructor(private http:Http) { }

  ngOnInit() {
  }

  get currentField() { 
    return JSON.stringify(this.model);
  }

  getData() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://127.0.0.1:8080', this.model, options).subscribe(res => {
      this.data = res.json() || {};
      console.log(this.data);
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
