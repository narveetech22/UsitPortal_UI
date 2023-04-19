import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/ATS/modal/employee';
import { EmployeeService } from 'src/app/ATS/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee = new Employee();
  registerForm:any= FormGroup;
  submitted = false;
  id:any;
  constructor(private vendorService:EmployeeService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) {
   }
   get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorService.getEmployee(this.id).subscribe(
      (response :any)=>{ console.log(response.data); this.employee = response.data}
    )
  }

  updateEmployee(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
        
    this.vendorService.updateEmployee(this.employee).subscribe(
      (response:any)=>{console.log(response)
       const navigationExtras: NavigationExtras = {state: {data: response.message}};
      this.rt.navigate(['/list-employee'], navigationExtras);
      }
    )
  }

}
