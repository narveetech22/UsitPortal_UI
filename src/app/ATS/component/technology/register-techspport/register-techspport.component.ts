import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Techandsupport } from 'src/app/ATS/modal/techandsupport';
import { TechsupportService } from 'src/app/ATS/service/techsupport.service';

@Component({
  selector: 'app-register-techspport',
  templateUrl: './register-techspport.component.html',
  styleUrls: ['./register-techspport.component.css']
})
export class RegisterTechspportComponent implements OnInit {

  message = "";
  registerForm:any= FormGroup;
  entity = new Techandsupport();
  showAlert=false;
  submitted = false;
  constructor(private service: TechsupportService,private formBuilder: FormBuilder,private route:ActivatedRoute,private rt:Router) { }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      pseudoname: ['', Validators.required],
      location:[this.registerForm.location, Validators.required],
      email:  ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],//['', Validators.required],
      secmobile: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],//['', Validators.required],
      experience: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],//['', Validators.required],
      technology: ['', Validators.required],
      skills: ['', Validators.required],
  });
  }

  saveVendor(){
    this.message = "";
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
        console.log(this.entity)
        this.service.createEntity(this.entity).subscribe
        (
            (response : any)=>{
              console.log(response.status+" syysy")
              if(response.status=="Success"){
              console.log(response.status+" syysy")
              const navigationExtras: NavigationExtras= {state: {data: response.message}};
              this.rt.navigate(['/list-vms'], navigationExtras);
              }
              else
              {
                this.message="Vendor Already Exists";
              }
            }
        )
  }

  closeAlert(){
    this.showAlert=false;
  }

}
