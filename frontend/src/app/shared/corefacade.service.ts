import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorefacadeService {
  public url ="http://localhost"
  public port = 9000;
  public OTPresponse:any;

  constructor(public http:HttpClient) { }

  public sendOTP(parameter:any){
    return this.http.post(`${this.url}`+":"+`${this.port}`+"/Auth/sendOTP?phone="+`${parameter}`,{});

  }

  public VerifyOTP(code:any){
    return this.http.post(`${this.url}`+":"+`${this.port}`+"/Auth/verify?request_id="+`${this.OTPresponse.request_ID}&code=`+`${code}`,{});

  }
}
