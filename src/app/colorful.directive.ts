import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availableColors = [ '#B23030', '#FB9090', '#D25555', '#8F1414', '#640000',
                      '#B27B30', '#FBCE90', '#D29D55', '#8F5B14', '643A00',
                      '#254F73', '#6185A2', '#3C6587', '#123B5C', '#042540 ',
                      '#268E26', '#73C973', '#44A844', '#107210', '#005000'
                    ];

  @HostBinding('style.color') color: string; // i Want Listen this
  @HostBinding('style.border-color') borderColor: string;

  //Event keydown and chang color and border color
  @HostListener('keydown') newColor(){
    const randColorIndex = Math.floor(Math.random() * this.availableColors.length);
    this.color = this.borderColor = this.availableColors[randColorIndex];
  }
  
  constructor() { }

}
