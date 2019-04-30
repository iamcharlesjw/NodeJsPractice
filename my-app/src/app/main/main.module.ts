import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Test' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    data: {
      title: '404: Page Not Found'
    },
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [ HomeComponent, PagenotfoundComponent],
  exports: [ HomeComponent,PagenotfoundComponent]
})
export class MainModule { }
