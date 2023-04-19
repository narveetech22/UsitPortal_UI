import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Requirement } from 'src/app/ATS/modal/requirement';
import { RequirementService } from 'src/app/ATS/service/requirement.service';

@Component({
  selector: 'app-list-requirement',
  templateUrl: './list-requirement.component.html',
  styleUrls: ['./list-requirement.component.css']
})
export class ListRequirementComponent implements OnInit {

 
  //requirement : Requirement[]=[];
requirement : Requirement[]=[];
  requirement2 = new Requirement();
  message:any;
  showAlert=false;
  registerForm:any= FormGroup;
  submitted = false;

  constructor(private vendorService:RequirementService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        remarks: ['', Validators.required]
  });

    this.getAllRequirements();
  }

  get f() { return this.registerForm.controls; }

  getAllRequirements(){
    this.vendorService.getEntitylist().subscribe(
      (response:any) => { 
        this.requirement=response.data;
        console.log(response+" kkkkkk")
       }
    )
  }

  deleterecord(id:number){
    console.log("idd "+id)
   if(confirm("Are you sure you want to delete this record dfvdvdfvdfvdfvf ?"+id))
    this.vendorService.deleteEntitybyid(id).subscribe(
      (response:any)=>{console.log(response);
      }
    )
  }


  UpdateRequirement(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return ;
    }
      this.vendorService.EntityStatus(this.requirement2).subscribe(
        (response : any)=>{console.log(response)
        const navigationExtras: NavigationExtras= {state: {data: response.message}};
        this.rt.navigate(['/list-vms'], navigationExtras);
    }
      )

  }

  edit(vms:any){
    this.requirement2=vms;
  }

  closeAlert(){
    this.showAlert=false;
  }

}
