import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorefacadeService } from 'src/app/shared/corefacade.service';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css']
})
export class SendOTPComponent implements OnInit{
  
  constructor(private coreServiceService:CorefacadeService,private router: Router){

  }
 
public code:any = "91";
public phone:any;
public response:any;
public isDisabled = false;
public selectedCodes =[
  {"country":"INDIA","code":"91"},
  {"country":"Hong Kong","code":"852"},
  {"country":"Indonesia","code":"62"},
  {"country":"Iraq","code":"964"},
  {"country":"Japan","code":"81"}
];
ngOnInit(): void {
  console.log("phone",this.phone)
}
public async sendOTP(code:any,phone:any){
  console.log(phone.length)
  const parameter = `${code}${phone}`;
  if(code !=undefined && phone !=undefined){
    await this.coreServiceService.sendOTP(parameter).subscribe((res)=> {
      this.response = res;
      if(this.response.status){
        this.coreServiceService.request_ID = this.response.result.request_id;
        this.router.navigate(['/verify'])  
      }      
    });
  }
 
  

}

}
