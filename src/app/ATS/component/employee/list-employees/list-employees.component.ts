import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/ATS/modal/employee';
import { EmployeeService } from 'src/app/ATS/service/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  registerForm:any= FormGroup;
  employee : Employee[] = [];
  employe = new Employee();
  submitted = false;
  constructor(private service:EmployeeService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) { }

  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.getAllemps();
  }

  getAllemps(){
    this.service.getemplist().subscribe(
     // this.service.getlistp(this.page).subscribe(
      (response:any) => { 
        this.employee=response.data;
       // console.log(response+" kkkkkk")
       }
    )
  }

  


   deleteEmp(id:number){
    if(confirm("Are you sure you want to delete this record ?"))
     this.service.deleteEmployee(id).subscribe(
       (response:any)=>{console.log(response);
       // this.message=response.message;
        // this.showAlert=true;
         this.getAllemps();
       }
     )
   }
 

  UpdateVendor(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return ;
    }
    console.log(this.employe)
      this.service.EmployeeStatus(this.employe).subscribe(
        (response : any)=>{console.log(response.data)
        const navigationExtras: NavigationExtras= {state: {data: response.message}};
        this.rt.navigate(['/list-employee'], navigationExtras);
    }
    )
  }

  edit(vms:any){
    console.log(vms)
    this.employe=vms;
  }
  
  search(search:string){
    if(search==""){
      search = "dummysearch";
    }
     this.service.search(search).subscribe(
      (response : any)=>{
        console.log(response.data)
        this.employee=response.data;
     }
    )
  }

  // for pagination

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 1;
  tableSizes: any = [3, 6, 9, 12];

  onTableDataChange(event: any) {
    this.page = event;
    console.log(this.page);
    //this.getAllemps();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    //this.getAllemps();
  }
}
