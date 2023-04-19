import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { SalesInterview } from 'src/app/ATS/modal/sales-interview';
import { SalesInterviewService } from 'src/app/ATS/service/sales-interview.service';

@Component({
  selector: 'app-list-interview',
  templateUrl: './list-interview.component.html',
  styleUrls: ['./list-interview.component.css']
})
export class ListInterviewComponent implements OnInit {

  entity = null;
  intentity = new SalesInterview();
  submitted = false;
  registerForm:any= FormGroup;
  showAlert = false;
  constructor(private service: SalesInterviewService, private rt: Router) { }
  ngOnInit() {
    this.getAll();
}

get f() { return this.registerForm.controls; }
getAll(){
this.service.getlist()
this.service.getlist().subscribe(
  (response:any) => { 
    this.entity=response.data;
    console.log(response+" kiran"+this.entity);
   }
)
  }

deleteEntity(id:number){
 // if(confirm("Are you sure you want to delete this record ?"))
  this.service.deleteEntity(id).subscribe(
    (response:any)=>{console.log(response);
   //  this.message=response.message;
    //  this.showAlert=true;
      this.getAll();
    }
  )
}

UpdateVendor(){
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return ;
  }
    this.service.toggleStatus(this.intentity).subscribe(
      (response : any)=>{console.log(response.data)
      const navigationExtras: NavigationExtras= {state: {data: response.message}};
      this.rt.navigate(['/list-interview'], navigationExtras);
      
  }
  )
}

edit(vms:any){
  this.intentity=vms;
}


}
