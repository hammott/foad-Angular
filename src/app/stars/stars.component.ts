import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() rating: number = 4; // چون ما این را در کامپوننت والد تغییر دادیم
  width;
  /* baraye @Input() agar bekhahim az array rating dar component parent chiz digari estefade konim
    be in soorat minevisim @Input('StarRating') rating: number = 4
    baraye Output ham mitavan injory estefade kard
  */

  @Output() starClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

  public onClick(){
    this.starClicked.emit(this.rating)
  }

}
