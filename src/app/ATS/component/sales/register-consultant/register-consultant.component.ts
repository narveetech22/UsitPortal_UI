import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SalesConsultant } from 'src/app/ATS/modal/sales-consultant';
import { SalesConsultantService } from 'src/app/ATS/service/sales-consultant.service';

@Component({
  selector: 'app-register-consultant',
  templateUrl: './register-consultant.component.html',
  styleUrls: ['./register-consultant.component.css']
})
export class RegisterConsultantComponent implements OnInit {

  form:any= FormGroup;
  message:any;
  registerForm2:any= FormGroup;
  consultant = new SalesConsultant();
  showAlert=false;
  submitted = false;

  selectedFiles!: FileList;  
  currentFileUpload!: File;  

  constructor(private service: SalesConsultantService,private formBuilder: FormBuilder,private route:ActivatedRoute,private rt:Router) { }

  // convenience getter for easy access to form fields
  get frm() { return this.form.controls; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      uscontactnumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      visastatus: ['', Validators.required],
      totexp: [this.form.totexp, Validators.required],
      currentlocation: [this.form.currentlocation, Validators.required],
      relocate: [this.form.relocate, [Validators.required]],
      technology: ['', [Validators.required]],
      additionalskills: [this.form.additionalskills, [Validators.required]],
      ratetype: [this.form.ratetype, [Validators.required]],
      hourlyrate: [this.form.hourlyrate, [Validators.required]],
      summary: [this.form.summary, [Validators.required]],
      resumeFileName: [this.form.resumeFileName, [Validators.required]],
      h1bFileName: [this.form.h1bFileName, [Validators.required]],
      dlFileName: [this.form.dlFileName, [Validators.required]],
      priority: ['', [Validators.required]],
      anyrestriction: [this.form.anyrestriction, [Validators.required]],
  });
  }

  saveConsultant(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm2.invalid) {
            return ;
        }
          this.service.registerTechnology(this.consultant).subscribe(
            (response : any)=>
            {//console.log(response)
            const navigationExtras: NavigationExtras= {state: {data: response.message}};
            this.rt.navigate(['/list-consultant'], navigationExtras);
        }
      )

  }

  onSubmit(){
    
    this.submitted = true;
         if (this.form.invalid) {
          return;
      }
      console.log(this.form.value);
      this.service.registerTechnology(this.consultant).subscribe(
        (response : any)=>{//console.log(response)
         const navigationExtras: NavigationExtras= {state: {data: response.message}};
         this.rt.navigate(['/list-consultant'], navigationExtras);
        }
        )
  }

  closeAlert(){
    this.showAlert=false;
  }

// file upload
/*
  selectFile(event:any) {  
    const file = event.target.files.item(0);  
   
    if (file.type.match('image.*')) {  
      var size = event.target.files[0].size;  
      if(size > 1000000)  
      {  
          alert("size must not exceeds 1 MB");  
          this.form.get('resumeFileName').setValue("");  
      }  
      else  
      {  
        this.selectedFiles = event.target.files;  
      }  
    } else {  
      this.form.get('resumeFileName').setValue("");  
      alert('invalid format!');  
    }  
  
  }
  */
}
