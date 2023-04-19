import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SalesConsultant } from '../modal/sales-consultant';

@Injectable({
  providedIn: 'root'
})
export class SalesConsultantService {
 // baseUrl = "http://localhost:8080/USIT_Portal/";
 baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
 // baseUrl ="http://localhost:9090/";//environment.API_BASE_URL; //"http://localhost:8080/USIT_Portal2/";//
  constructor(private http:HttpClient) { }

  //used for create the resource
  registerTechnology(consultant: SalesConsultant){
    return this.http.post(this.baseUrl+"usit/sales/saveConsultant",consultant);
  }

   //used for update the resource
   updateConsultant(consultant: SalesConsultant){
    return this.http.post(this.baseUrl+"usit/sales/updateConsultant",consultant);
  }

   //used for get the resource
   getAll(){
    return this.http.get(this.baseUrl+"usit/sales/all");
  }

   //used for get one resource
   getEntityById(id: number){
    return this.http.get(this.baseUrl+"usit/sales/entitybyid/"+id);
  }

    //used for delete the resource
    deleteEntity(id: number){
    return this.http.delete(this.baseUrl+"usit/sales/deletSaleConsultant/"+id);
  }

   //used for delete the resource
   toggleStatus(consultant: SalesConsultant){
    return this.http.patch(this.baseUrl+"usit/sales/status",consultant);
  }


}
