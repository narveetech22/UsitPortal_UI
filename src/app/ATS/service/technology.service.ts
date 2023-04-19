import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Technology } from '../modal/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  //baseUrl = "http://localhost:8080/USIT_Portal/";
  //baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
  baseUrl = "http://localhost:8090/";//environment.API_BASE_URL;//"http://localhost:8080/USIT_Portal2/";//
  constructor(private http:HttpClient) { }

  //used for create the resource
  registerTechnology(technology: Technology){
    return this.http.post(this.baseUrl+"usit/tech/register-tech",technology);
  }

   //used for update the resource
   updateTechnology(technology: Technology){
    return this.http.post(this.baseUrl+"usit/tech/register-tech",technology);
  }

   //used for get the resource
   getTechnologylist(){
    return this.http.get(this.baseUrl+"usit/tech/tech");
  }

   //used for get one resource
   getTechnology(id: number){
    return this.http.get(this.baseUrl+"usit/tech/techbyid/"+id);
  }

    //used for delete the resource
    deleteTechnology(id: number){
    return this.http.delete(this.baseUrl+"usit/tech/techdel/"+id);
  }

  
}
