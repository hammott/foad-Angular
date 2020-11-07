import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  elementSelector: string = '<app-componentName></app-componentName>';
  classSelector : string = '<div class="app-componentName"></div>';
  propertySelector: string = '<div app-componentName></div>'
  stringInterpolation:string  = '{{var}}';
  PropertyBinding:string = '[property] = "var"';
  eventBinding:string = '(event) = "function"';



  //Example
  name:string = 'Hamid';
  name2:string = 'Hamid';

  public onInputChanged(e : Event){
    console.log(e);
    this.name = (<HTMLInputElement>e.target).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
