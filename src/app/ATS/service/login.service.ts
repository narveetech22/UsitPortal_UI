import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new User();

  //baseUrl = "http://localhost:9090/";//
  baseUrl = "http://localhost:8090/";
  constructor(private http:HttpClient) { }

  validatingUser(user:User){
    return this.http.post(this.baseUrl+"usit/login/UserloginCheck",user);
  }
}
