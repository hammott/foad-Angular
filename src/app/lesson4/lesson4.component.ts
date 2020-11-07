import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css']
})
export class Lesson4Component implements OnInit {

  isCorrect: boolean = true;

  
  isModified : boolean = false;
  isCancelled : boolean = true;

  styles={};
  classes={};

  constructor() { }
  isCorrectBtn(){
    this.isCorrect = this.isCorrect ? false : true;
  }

  //that is lifecycle hook . component is initial or shooroo be load shodan kard
  ngOnInit(): void {
    this.styles = {
      "font-size" : "2rem",
      "color":"red",
    };

    this.classes = {
       "big-font-size" : this.isModified,
       "cancelled-color": this.isCancelled
    }
  }

}
