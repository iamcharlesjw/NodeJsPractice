import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// My Module 
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [ HomeComponent, PagenotfoundComponent],
  exports: [ HomeComponent,PagenotfoundComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
