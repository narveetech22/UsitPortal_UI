import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Requirement } from 'src/app/ATS/modal/requirement';
import { RequirementService } from 'src/app/ATS/service/requirement.service';

@Component({
  selector: 'app-edit-requirement',
  templateUrl: './edit-requirement.component.html',
  styleUrls: ['./edit-requirement.component.css']
})
export class EditRequirementComponent implements OnInit {

  requirement = new Requirement();
  registerForm:any= FormGroup;
  submitted = false;
  id:any;
  constructor(private vendorService:RequirementService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) {
   }
   get err() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorService.getEntity(this.id).subscribe(
      (response :any)=>{ console.log(response.data); this.requirement = response.data}
    )
  }

  updateEntity(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
        
    this.vendorService.updateEntity(this.requirement).subscribe(
      (response:any)=>{console.log(response)
       const navigationExtras: NavigationExtras= {state: {data: response.message}};
      this.rt.navigate(['/list-requirement'], navigationExtras);
      }
    )
  }

}
