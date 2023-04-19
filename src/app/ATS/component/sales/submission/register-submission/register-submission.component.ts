import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SalesConsultant } from 'src/app/ATS/modal/sales-consultant';
import { SalesSubmissions } from 'src/app/ATS/modal/sales-submissions';
import { SalesSubmissionServiceService } from 'src/app/ATS/service/sales-submission-service.service';

@Component({
  selector: 'app-register-submission',
  templateUrl: './register-submission.component.html',
  styleUrls: ['./register-submission.component.css']
})
export class RegisterSubmissionComponent implements OnInit {
  message:any;
  registerForm:any= FormGroup;
  sales = new SalesSubmissions();
  entity : SalesConsultant[]=[];
  showAlert=false;
  submitted = false;
  arraydt:any=[];
  constructor(private service: SalesSubmissionServiceService,private formBuilder: FormBuilder,private route:ActivatedRoute,private rt:Router) {
    
   }

  // convenience getter for easy access to form fields
  get frm() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.getConsultant();
   // console.log("on load event")
     this.registerForm = this.formBuilder.group({
      consultantid: ['', Validators.required],
      positiontitleerr: ['', Validators.required],
      projectlocation: ['', Validators.required],
      ratetype : [this.registerForm.ratetype, Validators.required],
      subraterr:['', Validators.required],
      endclient: ['', Validators.required],
      partnererr: ['', Validators.required],
      vendorerr: ['', [Validators.required]],
      contactpersonerr: ['', [Validators.required]],
      contactnumbererr: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      contactemailerr:  ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
   });
  }

  saveEntity(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
          this.service.createEntity(this.sales).subscribe(
            (response : any)=>{//console.log(response)
              const navigationExtras: NavigationExtras= {state: {data: response.message}};
              this.rt.navigate(['/list-submissions'], navigationExtras);
        }
      )
  }


  getConsultant(){
    this.service.getConsultant().subscribe(
      (response : any)=>{
        this.entity = response.data;
  }
)

  }

  closeAlert(){
    this.showAlert=false;
  }

  dupcheck(){
    this.service.dupcheck(this.sales.consultantid,this.sales.projectlocation,this.sales.endclient).subscribe(
      (response : any)=>{
        this.message = response.data;
       if(response.data=="Available"){
        this.message = "Consultent Already Submitted to "+this.sales.projectlocation+" for "+this.sales.endclient+" Client";
        this.sales.endclient="";
       }
       else{
        this.message = "";
       }
      }
    )
  }
  
}
