import { Component, Input, OnInit } from '@angular/core';
import {  NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/ATS/auth.service';
import { User } from 'src/app/ATS/modal/user';
import { LoginService } from 'src/app/ATS/service/login.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Input() user: User = new User();
  message = "";
  constructor(private userService: LoginService,private router:Router,private authService : AuthService) { }

  ngOnInit(): void {
  }

  userLogin(){
    //console.log(this.user);
    this.userService.validatingUser(this.user).subscribe(
      (response : any)=>{
        //console.log(response)
        this.user = response.data;
        if(response.status=="success"){
         const navigationExtras: NavigationExtras= {state: {data: response.message}};
         this.router.navigate(['/dashboard'], navigationExtras);

        // this.user=response.data;
        this.authService.login(this.user)
        .subscribe( data => { 
           console.log("Is Login Success: " + data); 
     
          if(data) this.router.navigate(['/dashboard']); 
          });

         //this.showAlert=true; 
        }
        else
        {
          this.message="invalid Credentials ";
        }
     }
    )


  }

}
