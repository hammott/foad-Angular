import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lifecylehook',
  templateUrl: './lifecylehook.component.html',
  styleUrls: ['./lifecylehook.component.css'],
})
export class LifecylehookComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @ViewChild('par7', { static: true }) par7: ElementRef;
  @ContentChild('par6', { static: true }) par6: ElementRef;


  @Input() var1;

  
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges was Called');
  }

  ngOnInit(): void {
    console.log('ngOnInit: ' + this.par6.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck was called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit: ' + this.par6.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: ' + this.par6.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ' + this.par7.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ' + this.par7.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log('Component Destroyed');
  }


  public onChangeViewChild(){
    this.par7.nativeElement.textContent = 'View Child Changed !!';
  }
}
