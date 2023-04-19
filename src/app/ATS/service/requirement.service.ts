import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Requirement } from '../modal/requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  //baseUrl = "http://localhost:8080/USIT_Portal/";
  baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
  ///baseUrl = "http://localhost:9090/";//environment.API_BASE_URL;//"http://localhost:8080/USIT_Portal2/";//
  constructor(private http:HttpClient) { }

  //used for create the resource
  addEntity(requirement: Requirement){
    return this.http.post(this.baseUrl+"usit/recruiting/requirments",requirement);
  }

   //used for update the resource
   updateEntity(entity: Requirement){
    return this.http.post(this.baseUrl+"usit/vms/vm",entity);
  }

   //used for get the resource
   getEntitylist(){
    return this.http.get(this.baseUrl+"usit/recruiting/requirments");
  }

   //used for get one resource
   getEntity(id: number){
    return this.http.get(this.baseUrl+"usit/recruiting/requirments/"+id);
  }

    //used for delete the resource
    deleteEntitybyid(id: number){
    return this.http.delete(this.baseUrl+"usit/recruiting/requirments/"+id);
  }

    //used for delete the resource
    EntityStatus(entity: Requirement){
      return this.http.patch(this.baseUrl+"usit/vms/status",entity);
  }
}
