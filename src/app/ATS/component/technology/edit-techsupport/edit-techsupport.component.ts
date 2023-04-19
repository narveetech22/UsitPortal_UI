import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Techandsupport } from 'src/app/ATS/modal/techandsupport';
import { TechsupportService } from 'src/app/ATS/service/techsupport.service';

@Component({
  selector: 'app-edit-techsupport',
  templateUrl: './edit-techsupport.component.html',
  styleUrls: ['./edit-techsupport.component.css']
})
export class EditTechsupportComponent implements OnInit {

  message = "";
  registerForm:any= FormGroup;
  entity = new Techandsupport();
  showAlert=false;
  submitted = false;
  id:any;
  constructor(private service: TechsupportService,private formBuilder: FormBuilder,private route:ActivatedRoute,private rt:Router) { }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.getEntity(this.id).subscribe(
        (response :any)=>{ //
          console.log(response.data); 
          this.entity = response.data}
      )
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

  updateEntity(){
    this.message = "";
    this.submitted = true;
      this.service.updateEntity(this.entity).subscribe
      (
          (response : any)=>{
            //console.log(response.status+" syysy")
            const navigationExtras: NavigationExtras= {state: {data: response.message}};
            this.rt.navigate(['/list-techsupport'], navigationExtras);
          }
      )
  }

  closeAlert(){
    this.showAlert=false;
  }

}
