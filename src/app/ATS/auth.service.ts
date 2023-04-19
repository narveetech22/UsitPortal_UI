import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Employee } from './modal/employee';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  user = new Employee();
  constructor() { }

  login(user2:any): Observable<any> {
    //console.log(user);
   // console.log(user+" ==========");
   this.user = user2;
   console.log(JSON.stringify(this.user)+" ==========");
   // this.isUserLoggedIn = userName == 'admin' && password == 'admin';
   this.isUserLoggedIn = true;
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
    localStorage.setItem('userName',user2.fullname); 
    localStorage.setItem('userid', JSON.stringify(this.user.userid)); 
    return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap(val => { 
          console.log("Is User Authentication is successful: " + val); 
        })
    );
 }

 logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn'); 
  }
}
