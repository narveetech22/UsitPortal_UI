import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotpswService {

  constructor(private http:HttpClient) { }
 // private baseUrl = environment.API_BASE_URL;
 baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
   public callapi(email: string){
     return this.http.get(this.baseUrl+"usit/forgotPassword/forgotPassword/"+email);
   }


   public resetpsw(email: string,npsw: string,cpsw:string){
    return this.http.get(this.baseUrl+"usit/forgotPassword/ResetPassword?email="+email+"&newpassword="+npsw+"&confirmpassword="+cpsw);
  }
}
