import { Component, OnInit } from '@angular/core';
import {user} from '../app-interface';
@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {

  ratings : number[] = [3.5 , 5 , 4 , 1.5, 4.5];
  constructor() { }

  public onStarClicked (rating:number){
    console.log(`The Rating ${rating} is clicked`)
  }

  users: user[] = [];
  public userAdded(users: user[]){
    this.users= users;
  }

  ngOnInit(): void {
  }
  
  
  

}
