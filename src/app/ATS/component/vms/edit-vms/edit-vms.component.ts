import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vendor } from 'src/app/ATS/modal/vendor';
import { VmsService } from 'src/app/ATS/service/vms.service';

@Component({
  selector: 'app-edit-vms',
  templateUrl: './edit-vms.component.html',
  styleUrls: ['./edit-vms.component.css']
})
export class EditVmsComponent implements OnInit {

  vendor = new Vendor();
  registerForm:any= FormGroup;
  submitted = false;
  id:any;
  constructor(private vendorService:VmsService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) {
   }
   get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorService.getVendor(this.id).subscribe(
      (response :any)=>{ //console.log(response.data); 
        this.vendor = response.data}
    )
  }

  updateVendor(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
        
    this.vendorService.updateVendor(this.vendor).subscribe(
      (response:any)=>{//console.log(response)
       const navigationExtras: NavigationExtras= {state: {data: response.message}};
      this.rt.navigate(['/list-vms'], navigationExtras);
      }
    )
  }


}
