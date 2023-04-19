import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SalesConsultant } from 'src/app/ATS/modal/sales-consultant';
import { SalesConsultantService } from 'src/app/ATS/service/sales-consultant.service';

@Component({
  selector: 'app-edit-consultant',
  templateUrl: './edit-consultant.component.html',
  styleUrls: ['./edit-consultant.component.css']
})
export class EditConsultantComponent implements OnInit {

  consultant = new SalesConsultant();
  registerForm:any= FormGroup;
  submitted = false;
  id:any;
  constructor(private service:SalesConsultantService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) {
   }
  // get frm() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getEntityById(this.id).subscribe(
      (response :any)=>{ console.log(response.data); this.consultant = response.data}
    )
  }
  get frm() { return this.registerForm.controls; }

  updateConsultant(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
        
    this.service.updateConsultant(this.consultant).subscribe(
      (response:any)=>{console.log(response)
       const navigationExtras: NavigationExtras= {state: {data: response.message}};
      this.rt.navigate(['/list-consultant'], navigationExtras);
      }
    )
  }


}
