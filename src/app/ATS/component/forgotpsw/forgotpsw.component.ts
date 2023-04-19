import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotpswService } from '../../service/forgotpsw.service';

@Component({
  selector: 'app-forgotpsw',
  templateUrl: './forgotpsw.component.html',
  styleUrls: ['./forgotpsw.component.css']
})
export class ForgotpswComponent implements OnInit {

   email!: string;
   message="";
  constructor(private fservice:ForgotpswService, private route:Router) { }

  ngOnInit(): void {
  }

  public registernow(){
    //this.submitted = true;
    console.log(this.email);
      this.fservice.callapi(this.email)
      .subscribe((response:any)=>{
        //console.log(response.status);
        if(response.status=="Success"){
          //this.route.navigateByUrl('/vms'); 
          //console.log(data)
        //this.route.navigateByUrl('/vms'); 
        this.message = " Email Not Registered";
        }
        else{
           //this.message = " Email Not Registered";
        }
        
      });
    }
}
