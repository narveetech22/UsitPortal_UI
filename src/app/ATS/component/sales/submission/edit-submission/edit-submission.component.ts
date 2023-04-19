import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SalesSubmissions } from 'src/app/ATS/modal/sales-submissions';
import { SalesSubmissionServiceService } from 'src/app/ATS/service/sales-submission-service.service';

@Component({
  selector: 'app-edit-submission',
  templateUrl: './edit-submission.component.html',
  styleUrls: ['./edit-submission.component.css']
})
export class EditSubmissionComponent implements OnInit {

  sales = new SalesSubmissions();
  registerForm:any= FormGroup;
  submitted = false;
  id:any;
  constructor(private service:SalesSubmissionServiceService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) {
   }
  // get frm() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getSingleEntity(this.id).subscribe(
      (response :any)=>{ console.log(response.data); this.sales = response.data}
    )
  }

  updateEntity(){
    this.service.updateEntity(this.sales).subscribe(
      (response:any)=>{console.log(response)
       const navigationExtras: NavigationExtras= {state: {data: response.message}};
      this.rt.navigate(['/list-submissions'], navigationExtras);
      }
    )
  }

}
