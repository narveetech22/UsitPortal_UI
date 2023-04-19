import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SalesInterview } from '../modal/sales-interview';

@Injectable({
  providedIn: 'root'
})
export class SalesInterviewService {
  baseUrl = "http://localhost:8090/usit/";
 // baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
 // baseUrl = "http://localhost:9090/";//environment.API_BASE_URL;//"http://localhost:8080/USIT_Portal2/";//
  constructor(private http:HttpClient) { }

  //used for create the resource
  createEntity(sales: SalesInterview){
    return this.http.post(this.baseUrl+"usit/sales/interviews/save",sales);
  }

  //used for get the resource
  getlist(){
    return this.http.get(this.baseUrl+"sales/interview/all");
  }

    //used for update the resource
    updateEntity(sales: SalesInterview){
    return this.http.post(this.baseUrl+"usit/sales/Addsubmission",sales);
  }
    //used for get one resource
    getSingleEntity(id: number){
    return this.http.get(this.baseUrl+"usit/sales/interview/"+id);
  }

    //used for delete the resource
    deleteEntity(id: number){
    return this.http.delete(this.baseUrl+"usit/sales/interviews/delete/"+id);
  }

   //used for get the resource
   getConsultant(){
    return this.http.get(this.baseUrl+"usit/sales/getConsultant");
  }

   //used for delete the resource
   toggleStatus(consultant: SalesInterview){
    return this.http.patch(this.baseUrl+"usit/sales/int/status",consultant);
  }

}
