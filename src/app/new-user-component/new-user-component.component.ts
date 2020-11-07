import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Iuser } from '../app-interface';

@Component({
  selector: 'app-new-user-component',
  templateUrl: './new-user-component.component.html',
  styleUrls: ['./new-user-component.component.css']
})
export class NewUserComponentComponent implements OnInit, OnChanges {
  
  private _user:Iuser // underline manzoor in ast ke in syntax private ast

  //@Input() user:Iuser;
  @Input()
  // bejaye estefade az set va get mitavan az ngOnChanges estefade kard
  // Agar chandta Input darim az onChanges estefade konim
  set user(user:Iuser){
    this._user = user;
    this.counter++;
  }
  get user(): Iuser{
    return this._user
  }

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }
  //Or Use ngOnchange bejaye set va Get
  ngOnChanges(){
    this._user = this.user;
    this.counter++;
  }

}
