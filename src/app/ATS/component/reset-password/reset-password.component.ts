import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotpswService } from '../../service/forgotpsw.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  newpassword!: string;
  email!: string;
  confirmpassword!: string;
  message!:string;
  fail!:string;
  constructor(private fservice:ForgotpswService, private route:Router) { }

  ngOnInit(): void {
  }

  registernow(){
    if(this.newpassword!=null && this.confirmpassword!=null){
      if(this.newpassword!=this.confirmpassword){
        this.fail="New Password & Confirm Password are not same !";
        this.message="";
      }
      else
      {
        this.fservice.resetpsw(this.email, this.newpassword,this.confirmpassword)
        .subscribe((response:any)=>{
          console.log(response.status);
          if(response.status=="Success"){
            this.message="Password updated successfully Please login";
            this.fail="";
          }
        });

      }
    }
  }

}
