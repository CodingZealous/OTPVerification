import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendOTPComponent } from './core/send-otp/send-otp.component';
import { VerificationComponent } from './core/verification/verification.component';
import { ConfiramationComponent } from './core/confiramation/confiramation.component';

const routes: Routes = [
  {path:'sendOTP',component:SendOTPComponent,pathMatch:'full'},
  {path:'verify',component:VerificationComponent,pathMatch:'full'},
  {path:'confirmation',component:ConfiramationComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
