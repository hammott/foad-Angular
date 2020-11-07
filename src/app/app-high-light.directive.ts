import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighLight]'
})
export class AppHighLightDirective {

  constructor(private elementRef : ElementRef, private renderer: Renderer2) { }

  @Input() highlightColor: string = 'yellow';
  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor = 'yellow'; // is not safe , elementRef should'nt changes
    //Other Way Use by function ------------------------------------------
    this.changeBackgorundColor(this.highlightColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = 'transparent'; // Not Safe
    //Other Way Use by function ------------------------------------------
    this.changeBackgorundColor('transparent')
  }

  private changeBackgorundColor ( color : string) {
    this.elementRef.nativeElement.style.backgroundColor = color; // false beacuse not secure
    // Safe Way Use Renderer2 ----- best way ---- Always USE Renderer
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color)
  }


}
