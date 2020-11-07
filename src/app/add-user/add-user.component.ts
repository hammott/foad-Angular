import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {user} from '../app-interface';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: user[] = [
    {
      email:'a@a.com',
      password: '123',
      address: '123 Times ave'
    },
    {
      email:'b@b.com',
      password: '456',
      address: '456 Bothel way'
    },
    {
      email:'c@c.com',
      password: '789',
      address: '789 Saadat Abad'
    }
  ];


  @Output() onAddUserClicked = new EventEmitter<user[]> ();
  public onAddUser(email:string, password:string, address:string, e:Event){
    let u: user = {
      email: email,
      password: password,
      address: address
    };
    e.preventDefault();
    this.users.push(u);
    this.onAddUserClicked.emit(this.users);
  }

 

}
