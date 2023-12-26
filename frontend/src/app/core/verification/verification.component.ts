import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorefacadeService } from 'src/app/shared/corefacade.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  constructor(private coreServiceService:CorefacadeService,private router: Router){

  }
  OTP_field1:any;
  OTP_field2:any;
  OTP_field3:any;
  OTP_field4:any;
  public response :any;
  public verifyOTP(OTP_field1:any,OTP_field2:any,OTP_field3:any,OTP_field4:any){
    const code = `${OTP_field1}${OTP_field2}${OTP_field3}${OTP_field4}`
    if(OTP_field1 && OTP_field2 && OTP_field3 && OTP_field4){
      this.coreServiceService.VerifyOTP(code).subscribe(res => {
        this.response = res;
        if(this.response.status){
          this.router.navigate(['/confirmation'])  
        }
        console.log(res)
      })
    }
   
  }
}
