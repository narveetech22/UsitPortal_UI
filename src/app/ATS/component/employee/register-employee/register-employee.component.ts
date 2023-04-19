import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/ATS/modal/employee';
import { EmployeeService } from 'src/app/ATS/service/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee = new Employee();
  registerForm:any= FormGroup;
  submitted = false;
  countries: any[] = [];
  constructor(private formBuilder: FormBuilder,private service:EmployeeService,private rt:Router) { }
serch!:string;
    // convenience getter for easy access to form fields
    get frm() { return this.registerForm.controls; }

  ngOnInit(): void {

   

    // this.countries = [
    //   {
    //     id: 1,
    //     name: 'Albania',
    //   },
    //   {
    //     id: 2,
    //     name: 'Belgium',
    //   },
    //   {
    //     id: 3,
    //     name: 'Denmark',
    //   },
    //   {
    //     id: 4,
    //     name: 'Montenegro',
    //   },
    //   {
    //     id: 5,
    //     name: 'Turkey',
    //   },
    //   {
    //     id: 6,
    //     name: 'Ukraine',
    //   },
    //   {
    //     id: 7,
    //     name: 'Macedonia',
    //   }
    // ];

    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      pname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      pcont: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      ccont: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      desig: ['', Validators.required],
      rolerr:['', Validators.required],
      //Validators.pattern(/^[0-9]\d*$/)  pcont: ['', Validators.required],
    });
  }
  
  saveEmployee(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return ;
    }

    console.log(this.employee);
   // this.service.createEmp(this.employee).subscribe(
   //   (response : any)=>{console.log(response)
   //   const navigationExtras: NavigationExtras= {state: {data: response.message}};
   //   this.rt.navigate(['/list-employee'], navigationExtras);
  //}
   // )
  }

//   validateInput(field) {

//     this.registerForm.patchValue({ [field.id]: this.registerForm.controls[field.id].value }); }

// }
keyword = 'name';

auto(search:string){
  console.log(search+"kkkkk")
  this.service.search2(search).subscribe(
    (response : any)=>{console.log(response)
      this.countries = response.data;
      console.log(this.countries+" ======99999999999=====")
   // const navigationExtras: NavigationExtras= {state: {data: response.message}};
   // this.rt.navigate(['/list-employee'], navigationExtras);
}
  )
}
selectEvent(item:any) {
  // do something with selected item
  console.log(JSON.stringify(item.id)+" ]]]]]]")
}

onChangeSearch(search: string) {
  console.log(search+" 555555")
  this.auto(search);
  // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused(e:any) {
  // do something
}

onSearchChange(searchValue: string) { 
  this.serch =  searchValue;
  console.log(searchValue+" ----------------");
  
}
}
