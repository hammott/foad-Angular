import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.css']
})
export class Lesson5Component implements OnInit {

  isCorrect: boolean = false;
  isModified : boolean = false;
  isCancelled : boolean = true;
  switchProp : string = "a";


  styles ={ 
    "font-size" : "3rem",
    "color" : "green"
  };
  classes ={};
  users:string[]=["Foad","Rezvan","Milad","Farzad","Miad"]; // Or
  //users: Array<string> = ["Foad","Rezvan","Milad","Farzad","Miad"];

  userObj: any = [
    {
      id: 1,
      name:"Foad"
    },
    {
      id: 2,
      name:"Rezvan"
    },
    {
      id: 3,
      name:"Milad"
    },
    {
      id: 4,
      name:"Farzad"
    },
    {
      id: 5,
      name:"Miad"
    }
  ];

  userObj2: any = [
    {
      id: 1,
      name:"Foad"
    },
    {
      id: 2,
      name:"Rezvan"
    },
    {
      id: 3,
      name:"Milad"
    },
    {
      id: 4,
      name:"Farzad"
    },
    {
      id: 5,
      name:"Miad"
    }
  ];
  isCorrectBtn():void{
    this.isCorrect = this.isCorrect ? false : true;
    console.log("click SHod");
    this.styles = {
        "font-size" : this.isCorrect ? "2rem" : "3rem",
        "color" : this.isCorrect ? "red" : "green"
    }
  }
  constructor() { }
  ngOnInit(): void {
    this.classes = {
      "big-font-size" : this.isModified,
      "cancelled-color": this.isCancelled
   }
  };

  public refreshNewUser(){
    this.userObj2 = [
      {
        id: 1,
        name:"Rezvan , Changed"
      },
      {
        id: 2,
        name:"Foad, Changed"
      },
      {
        id: 3,
        name:"Milad"
      },
      {
        id: 4,
        name:"Farzad"
      },
      {
        id: 5,
        name:"Miad"
      },
      {
        id: 6,
        name:"Hamid, Add User"
      },
      {
        id: 7,
        name:"Shima, Add User"
      }
    ];
  }
  public trackByFunc(index:number, el:any){
    //چیزی را باید اینجا ریترن کرد که یونیک باشد. جون ای دی اینحا یونیک است از این استفاده کردیم
    return el.id;  //id is unique
  }

}
