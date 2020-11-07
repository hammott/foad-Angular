import { Component, OnInit, Input } from '@angular/core';
import { Iuser } from '../app-interface';

@Component({
  selector: 'app-lesson9',
  templateUrl: './lesson9.component.html',
  styleUrls: ['./lesson9.component.css']
})
export class Lesson9Component implements OnInit {
  

  user:Iuser = {
    name:'Hamid',
    age:32
  }

  users: Iuser [] = [
    {
      name:'hamid',
      age: 31
    },
    {
      name: 'Shima',
      age:30
    },
    {
      name: 'Ali',
      age: 28
    },
    {
      name: 'Ava',
      age: 29
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
