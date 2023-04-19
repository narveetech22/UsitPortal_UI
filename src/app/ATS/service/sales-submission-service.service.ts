import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SalesSubmissions } from '../modal/sales-submissions';

@Injectable({
  providedIn: 'root'
})
export class SalesSubmissionServiceService {
  baseUrl = "http://localhost:8090/usit/";
 // baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
  //baseUrl = "http://localhost:9090/";//environment.API_BASE_URL;//"http://localhost:8080/USIT_Portal/";
  constructor(private http:HttpClient) { }

  //used for create the resource
  createEntity(sales: SalesSubmissions){
    return this.http.post(this.baseUrl+"usit/sales/Addsubmission",sales);
  }

  //used for get the resource
  getlist(){
    return this.http.get(this.baseUrl+"sales/submission/all");
  }

    //used for update the resource
    updateEntity(sales: SalesSubmissions){
    return this.http.post(this.baseUrl+"usit/sales/Addsubmission",sales);
  }
    //used for get one resource
    getSingleEntity(id: number){
    return this.http.get(this.baseUrl+"usit/sales/editSalesSubmission/"+id);
  }

    //used for delete the resource
    deleteEntity(id: number){
    return this.http.delete(this.baseUrl+"usit/sales/deletesubmission/"+id);
  }

   //used for get the resource
   getConsultant(){
    return this.http.get(this.baseUrl+"usit/sales/getConsultant");
  }

   //used for get the resource
   dupcheck(id:number, location:string, client:string){
    return this.http.get(this.baseUrl+"usit/sales/dupcheck?id="+id+"&location="+location+"&client="+client);
  }


}
