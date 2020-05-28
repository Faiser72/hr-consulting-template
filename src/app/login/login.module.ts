import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CandidatesModule } from '../admin/candidates/candidates.module';





@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CandidatesModule
    
  ]
})
export class LoginModule { }
