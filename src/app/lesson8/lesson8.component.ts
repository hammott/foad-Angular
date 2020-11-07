import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.css']
})
export class Lesson8Component implements OnInit {
  @ViewChild('par6') par6: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
  public onContentChange() {
    this.par6.nativeElement.textContent = 'Content Child Changed!!!';
  }

}
