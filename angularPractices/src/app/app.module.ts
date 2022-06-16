import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentModule1Module } from './parent-module1/parent-module1.module';
import { ParentModule2Module } from './parent-module2/parent-module2.module';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule1Module,
    ParentModule2Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
