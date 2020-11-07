import { Component, ContentChild, OnInit, ElementRef, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentInit, AfterContentChecked {
  // Mesle @ViewChild
  @ContentChild('par5',{ static: true }) par5:ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log( "ngOnInit", this.par5.nativeElement.textContent);
  }
  ngAfterContentInit(){
    console.log( "ngAfterContentInit", this.par5.nativeElement.textContent);
  }
  ngAfterContentChecked (){
    console.log( "AfterContentChecked", this.par5.nativeElement.textContent);
  }

}
