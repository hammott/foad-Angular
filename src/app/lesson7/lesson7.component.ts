import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import {ViewchildComponent} from '../viewchild/viewchild.component';


@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component implements OnInit, AfterViewInit {

  htmlTest = '<img src=xxx onerror="alert(\'Xss Attack\')">'; 
  @ViewChild('par') par:ElementRef;
  @ViewChild('par2',{ static: true, read: ElementRef}) par2:ElementRef;
  @ViewChild('par3',{ static: true, read: ElementRef}) par3:ElementRef;
  @ViewChild('par4',{ static: true, read: ElementRef}) par4:ElementRef;

  // ComponentRef
  // User ClassName in Component For Selector
  @ViewChild(ViewchildComponent, {static:true, read:ViewchildComponent}) vcComp:ViewchildComponent;
  @ViewChildren(ViewchildComponent, {read:ViewchildComponent}) vsComps: QueryList<ViewchildComponent>;

  // zamni ghabele dastrasi mishe ke tamae view ghabele dastrasi bashad baraye hamin tooye AfterViewInit mishavad estefade kard
  // agar bekhahim dakhele ngOnInit estefade konim ghabl az initial shodan kamel
  // dar in soorat az keyword static estefade mikonim (dar soorate niaz)

  @ViewChild('par5') par5: ElementRef;
  constructor( private renderer: Renderer2) { }

  public ngOnInit(): void {
    console.log(this.vcComp);
    this.vcComp.increment();
    this.par4.nativeElement.innerHTML = this.htmlTest;
    this.par2.nativeElement.innerHTML = '11233123 in ngOnInit with static'; // GHALAT NOT SECURE
    this.renderer.setStyle(this.par3.nativeElement, 'color','purple'); // Important
  }

  public ngAfterViewInit () {
    this.vsComps.forEach((comp) =>{
      comp.increment();
    })
    this.par.nativeElement.innerHTML = '12345 in ngAfterViewInit without static'; //GHALAT NOT SECURE
  }

  public onClick(inputValue:string){
    alert(inputValue)
  }

  public onContentChange() {
    this.par5.nativeElement.textContent  = '1234';
  }

}
