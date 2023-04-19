import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vendor } from '../modal/vendor';

@Injectable({
  providedIn: 'root'
})
export class VmsService {

  baseUrl = "http://localhost:8090/";
  //baseUrl = "http://localhost:9090/";//environment.API_BASE_URL;;//"http://localhost:8080/USIT_Portal2/";//environment.API_BASE_URL;

  constructor(private http:HttpClient) { }

  public gettech(){
    //return this.http.get(this.baseUrl+"usit/technology/tech");
   return this.http.get(this.baseUrl+"usit/recruiter/getall");
  }

  //used for create the resource
  createVendor(vendor: Vendor){
    return this.http.post(this.baseUrl+"usit/vms/vms",vendor);
  }

   //used for update the resource
   updateVendor(vendor: Vendor){
    return this.http.post(this.baseUrl+"usit/vms/vm",vendor);
  }

   //used for get the resource
   getVendorlist(){
    return this.http.get(this.baseUrl+"usit/vms/vms");
  }
 //used for get the resource
  getVendorlistt(pageNo:number){
    return this.http.get(this.baseUrl+"usit/vms/vms/"+pageNo);
  }

   //used for get one resource
   getVendor(id: number){
    return this.http.get(this.baseUrl+"usit/vms/vm/"+id);
  }

    //used for delete the resource
    deleteVendor(id: number){
    return this.http.delete(this.baseUrl+"usit/vms/vmsdel/"+id);
  }

    //used for delete the resource
    VendorStatus(vendor: Vendor){
      return this.http.patch(this.baseUrl+"usit/vms/status",vendor);
  }


  search(search:string){
    return this.http.get(this.baseUrl+"usit/vms/search/"+search);
  }
}
