import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, ProfileComponent],
  exports: [LoginComponent, ProfileComponent, CommonModule]
})
export class UserModule { }
