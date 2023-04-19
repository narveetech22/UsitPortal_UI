import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendor } from 'src/app/ATS/modal/vendor';
import { VmsService } from 'src/app/ATS/service/vms.service';

import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-vms',
  templateUrl: './create-vms.component.html',
  styleUrls: ['./create-vms.component.css']
})
export class CreateVmsComponent implements OnInit {

  //
  dropdownList:any = [];
  dropdownSettings:IDropdownSettings={};
  techdata:any=[];
  dropdownSettings2:IDropdownSettings={};
  //
  message = "";
  registerForm:any= FormGroup;
  vendor = new Vendor();
  showAlert=false;
  submitted = false;
  constructor(private vendorService: VmsService,private formBuilder: FormBuilder,private route:ActivatedRoute,private rt:Router) { }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    /////
    this.gettech();
    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
    /////
    this.registerForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      Recruiter: ['', Validators.required],
      headQuarters: [this.registerForm.headQuarters, Validators.required],
      vendortypes: ['', Validators.required],
      Contact: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],//['', Validators.required],
      email:  ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      othdetails: [this.registerForm.othdetails, [Validators.required]],
      drop : this.registerForm.drop,
      drop2 : this.registerForm.drop2,
  });
  }

  gettech(){
    this.vendorService.gettech().subscribe(
      (response:any) => { 
        this.techdata=response.data;
        console.log(this.techdata);
        this.dropdownSettings2 = {
          idField: 'id',
          textField: 'company',
          noDataAvailablePlaceholderText: "There is no item availabale to show",
          allowSearchFilter: true,
          clearSearchFilter :true
        };
       }
      )
  }

  saveVendor(){
    this.message = "";
    this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }
        console.log(this.vendor);
        console.log(JSON.stringify(this.registerForm.value, null, 2));
        /*
        this.vendorService.createVendor(this.vendor).subscribe
        (
            (response : any)=>{
              console.log(response.status+" syysy")
              if(response.status=="Success"){
            //  console.log(response.status+" syysy")
              const navigationExtras: NavigationExtras= {state: {data: response.message}};
              this.rt.navigate(['/list-vms'], navigationExtras);
              }
              else
              {
                this.message="Vendor Already Exists";
              }
            }
        )

        */
  }

  closeAlert(){
    this.showAlert=false;
  }
}
