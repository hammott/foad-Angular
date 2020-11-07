import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {


  username:string = '' ;
  password:string = '' ;
  retypePassword:string = '';
  isPasswordsMatch : boolean = false;

  public onUsernameInputChange (e : Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }
  public onPasswordInputChange (e:Event){
    this.password = (<HTMLInputElement>e.target).value;
    this.isPasswordsMatch = this.password !== this.retypePassword ? false : true;
  }

  public onRetypePasswordInputChange (e:Event){
    this.retypePassword = (<HTMLInputElement>e.target).value;
    // if (this.password !== this.retypePassword) {
    //   this.isPasswordsMatch = false;
    // } else {
    //   this.isPasswordsMatch = true;
    // }
    //
    
    this.isPasswordsMatch = this.password !== this.retypePassword ? false : true;
    console.log(this.isPasswordsMatch);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
