import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { StarsComponent } from './stars/stars.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Lesson8Component } from './lesson8/lesson8.component';
import { UsersComponent } from './users/users.component';
import { LifecylehookComponent } from './lifecylehook/lifecylehook.component';
import { Lesson9Component } from './lesson9/lesson9.component';
import { NewUserComponentComponent } from './new-user-component/new-user-component.component';
import { Lesson10Component } from './lesson10/lesson10.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ColorfulDirective } from './colorful.directive';
import { AppHighLightDirective } from './app-high-light.directive';
import { CarouselDirective } from './carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    StarsComponent,
    AddUserComponent,
    UserTableComponent,
    Lesson7Component,
    ViewchildComponent,
    Lesson8Component,
    UsersComponent,
    LifecylehookComponent,
    Lesson9Component,
    NewUserComponentComponent,
    Lesson10Component,
    CustomDirectiveComponent,
    ColorfulDirective,
    AppHighLightDirective,
    CarouselDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
