import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Techandsupport } from '../modal/techandsupport';

@Injectable({
  providedIn: 'root'
})
export class TechsupportService {

  //baseUrl = "http://localhost:8080/USIT_Portal/";
  baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
 // baseUrl = "http://localhost:9090/";//environment.API_BASE_URL;;//"http://localhost:8080/USIT_Portal2/";//environment.API_BASE_URL;

  constructor(private http:HttpClient) { }

  //used for create the resource
  createEntity(tech: Techandsupport){
    return this.http.post(this.baseUrl+"usit/techsupp/save",tech);
  }

  search(search:string){
    return this.http.get(this.baseUrl+"usit/techsupp/search/"+search);
  }

   //used for update the resource
   updateEntity(tech: Techandsupport){
    return this.http.post(this.baseUrl+"usit/techsupp/update",tech);
  }

   //used for get the resource
   getAll(){
    let search = "dummysearch";
    return this.http.get(this.baseUrl+"usit/techsupp/search/"+search);
  }

   //used for get one resource
   getEntity(id: number){
    return this.http.get(this.baseUrl+"usit/techsupp/edit/"+id);
  }

    //used for delete the resource
    deleteEntity(id: number){
    return this.http.delete(this.baseUrl+"usit/techsupp/delete/"+id);
  }

    //used for delete the resource
    Status(vendor: Techandsupport){
      return this.http.patch(this.baseUrl+"usit/techsupp/status",vendor);
  }
 
}
