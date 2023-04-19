import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Requirement } from 'src/app/ATS/modal/requirement';
import { RequirementService } from 'src/app/ATS/service/requirement.service';

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.css']
})
export class CreateRequirementComponent implements OnInit {

  message:any;
  registerForm:any= FormGroup;
  requirement = new Requirement();
  showAlert=false;
  submitted = false;

  constructor(private vendorService: RequirementService,private formBuilder: FormBuilder,private route:ActivatedRoute,private rt:Router) { }

  // convenience getter for easy access to form fields
  get err() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      //postedOn: ['', Validators.required],
      vendor2: ['', Validators.required],
      jobTitle2: ['', Validators.required],
      location2: ['', Validators.required],
      employmentType2: ['', Validators.required]
     // email:  ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  });
  }

  saveVendor(){
     this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
           this.vendorService.addEntity(this.requirement).subscribe(
            (response : any)=>{console.log(response)
            const navigationExtras: NavigationExtras= {state: {data: response.message}};
           this.rt.navigate(['/list-requirement'], navigationExtras);
           }
           );

   }

  closeAlert(){
    this.showAlert=false;
  }

}
