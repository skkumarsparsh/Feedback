import { Component, OnInit } from '@angular/core';
import { Form } from '../form.model';
import { Http,Headers,RequestOptions,RequestMethod } from '@angular/http';
import {FormControl, Validators} from '@angular/forms';

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
    {value: '5', viewValue: 'Very Bad'},
  ]

  model = new Form(1, '', '', 'http://');

  teacherControl1 = new Array(12);
  teacherControl2 = new FormControl('', [Validators.required]);
  teacherControl3 = new FormControl('', [Validators.required]);
  teacherControl4 = new FormControl('', [Validators.required]);
  teacherControl5 = new FormControl('', [Validators.required]);
  teacherControl6 = new FormControl('', [Validators.required]);

  constructor(private http:Http) {
    for(var i=0;i<12;i++) {
      this.teacherControl1[i] = new FormControl('', [Validators.required]);
      this.teacherControl2[i] = new FormControl('', [Validators.required]);
      this.teacherControl3[i] = new FormControl('', [Validators.required]);
      this.teacherControl4[i] = new FormControl('', [Validators.required]);
      this.teacherControl5[i] = new FormControl('', [Validators.required]);
      this.teacherControl6[i] = new FormControl('', [Validators.required]);
    }
  }

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
    // if(this.feedbackControl.hasError('required')) {
    //   console.log("Input 1 error");
    // }
    // if(this.feedbackControl1.hasError('required')) {
    //   console.log("Input 2 error");
    // }
    // if(this.feedbackControl2.hasError('required')) {
    //   console.log("Input 3 error");
    // }
  }

  prevStep() {
    this.step--;
  }

}
