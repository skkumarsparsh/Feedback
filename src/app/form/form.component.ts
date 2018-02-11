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
  initial;
  previousPanelControl;
  previousPanel;

  Feedbacks = [
    {value: '0', viewValue: 'Excellent'},
    {value: '1', viewValue: 'Very Good'},
    {value: '2', viewValue: 'Good'},
    {value: '3', viewValue: 'Satisfactory'},
    {value: '4', viewValue: 'Bad'},
    {value: '5', viewValue: 'Very Bad'},
  ]

  teacherControl1 = new Array(12);
  teacherControl2 = new Array(12);
  teacherControl3 = new Array(12);
  teacherControl4 = new Array(12);
  teacherControl5 = new Array(12);
  teacherControl6 = new Array(12);

  constructor(private http:Http) {
    for(var i=0;i<12;i++) {
      this.teacherControl1[i] = new FormControl('', [Validators.required]);
      this.teacherControl2[i] = new FormControl('', [Validators.required]);
      this.teacherControl3[i] = new FormControl('', [Validators.required]);
      this.teacherControl4[i] = new FormControl('', [Validators.required]);
      this.teacherControl5[i] = new FormControl('', [Validators.required]);
      this.teacherControl6[i] = new FormControl('', [Validators.required]);
    }
    this.initial=0;
  }

  ngOnInit() {
  }

  getData() {
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    // let options = new RequestOptions({ headers: headers });
    // this.http.post('http://127.0.0.1:8080', this.model, options).subscribe(res => {
    //   this.data = res.json() || {};
    //   console.log(this.data);
    // });
  }

  submit() {
    
  }

  setStep(index: number,panelcontrol,panel) {
    this.step = index;
    if(this.initial!=0) {
      this.changeColor(this.previousPanelControl,this.previousPanel);
      this.previousPanelControl = panelcontrol;
      this.previousPanel = panel;
    } else {
      this.previousPanelControl = panelcontrol;
      this.previousPanel = panel;
      this.initial=1;
    }
  }

  nextStep(panelcontrol,panel) {
    this.step++;
    this.changeColor(panelcontrol,panel);
  }

  prevStep(panelcontrol,panel) {
    this.step--;
    this.changeColor(panelcontrol,panel);
  }

  changeColor(panelcontrol,panel) {
    var j=0;
    for(var i=0;i<12;i++) {
      if(panelcontrol[i].hasError('required')) {
        j=1;
        break;
      }
    }
    if(j==1) {
      document.getElementById(panel).setAttribute("style","background-color:rgba(255,0,0,0.2);");
    } else {
      document.getElementById(panel).setAttribute("style","background-color:rgba(0,255,0,0.2);");
    }
  }

}
