import { Directive, Input, TemplateRef, OnInit, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './app-interface';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit{
  context : ICarouselContext | null = null;
  constructor(private templateRef: TemplateRef <ICarouselContext>,
              private viewContainerRef: ViewContainerRef) { }


  @Input() images: string[];

  public ngOnInit(){
    this.context = {
      $implicit : this.images[0] // harvaght load shod biyd avaling image ra namayesh bedahad
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }
}
