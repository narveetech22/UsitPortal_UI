import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SalesInterviewService } from 'src/app/ATS/service/sales-interview.service';

@Component({
  selector: 'app-register-interview',
  templateUrl: './register-interview.component.html',
  styleUrls: ['./register-interview.component.css']
})
export class RegisterInterviewComponent implements OnInit {

  form:any= FormGroup;
  loading = false;
  submitted = false;
  id!: number;
  isAddMode!: boolean;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private service: SalesInterviewService,
   //   private alertService: AlertService 
  ) { }

  ngOnInit() {

      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;
      this.form = this.formBuilder.group({
      submissionid: ['', Validators.required],
      interviewDate: ['', Validators.required],
      timezone:['', Validators.required],
      round: ['', Validators.required],     
      //  password: ['', [Validators.required, Validators.minLength(6)]]
      modeofintr: ['', Validators.required],
      feedback: ['', Validators.required],
      interviewstatus: ['', Validators.required],
       // interviewDate: ['', Validators.required],
      });

      if (!this.isAddMode) {

        this.id = this.route.snapshot.params['id'];
        this.service.getSingleEntity(this.id).subscribe(
          (response :any)=>{ console.log(response.data); 
         // this.consultant = response.data;submissionid
          this.f.submissionid.setValue(response.data.submissionid);
          this.f.interviewDate.setValue(response.data.interviewDate);
          this.f.timezone.setValue(response.data.timezone);
          this.f.round.setValue(response.data.round);
          this.f.modeofintr.setValue(response.data.modeofintr);
          this.f.feedback.setValue(response.data.feedback);
          this.f.interviewstatus.setValue(response.data.interviewstatus);
        }
        )

    }

  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit(){
    this.submitted = true;
         if (this.form.invalid) {
          return;
      }
      console.log(this.form.value);
      this.loading = true;

      this.service.createEntity(this.form.value).subscribe(
        (response : any)=>{console.log(response)
        const navigationExtras: NavigationExtras= {state: {data: response.message}};
        this.router.navigate(['/list-interview'], navigationExtras);
    })
  }
  //  {
  //     this.submitted = true;
  //     // reset alerts on submit
  //     this.alertService.clear();
  //     // stop here if form is invalid
  //     this.loading = true;
  //     this.accountService.register(this.form.value)
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //                 this.alertService.success('Registration successful', { keepAfterRouteChange: true });
  //                 this.router.navigate(['../login'], { relativeTo: this.route });
  //             },
  //             error => {
  //                 this.alertService.error(error);
  //                 this.loading = false;
  //             });
  // }
}
