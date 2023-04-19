import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Excel } from '../component/excel/excel';
import { Employee } from '../modal/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 // baseUrl = "http://localhost:9090/";//environment.API_BASE_URL;;//"http://localhost:8080/USIT_Portal2/";//
  //baseUrl = "http://localhost:8080/USIT_Portal/";
  //baseUrl = "http://69.216.19.140:8080/USIT_Portal/";
  baseUrl = "http://localhost:8090/";
  constructor(private http:HttpClient) { }

  //used for create the resource
  createEmp(emp: Employee){
    return this.http.post(this.baseUrl+"usit/users/saveUser",emp);
  }

  createEmp2(file: any){
    return this.http.post(this.baseUrl+"usit/product/upload",file);
  }
  search2(keyword:string){
    return this.http.get(this.baseUrl+"usit/users/search2/"+keyword);
   }
  //used for get the resource
  getemplist(){
    return this.http.get(this.baseUrl+"usit/users/all");
  }

   //used for get the resource
   getlistp(pageNo:number){
    return this.http.get(this.baseUrl+"usit/users/vms/"+pageNo);
  }

    //used for update the resource
    updateEmployee(emp: Employee){
    return this.http.post(this.baseUrl+"usit/users/updateUser",emp);
  }
    //used for get one resource
    getEmployee(id: number){
    return this.http.get(this.baseUrl+"usit/users/userbyid/"+id);
  }

    //used for delete the resource
    deleteEmployee(id: number){
    return this.http.delete(this.baseUrl+"usit/users/delete/"+id);
  }

    //used for delete the resource
    EmployeeStatus(emp: Employee){
      return this.http.patch(this.baseUrl+"usit/users/status",emp);
  }

  search(search:string){
    return this.http.get(this.baseUrl+"usit/users/search/"+search);
  }
}
