import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SalesConsultant } from 'src/app/ATS/modal/sales-consultant';
import { SalesConsultantService } from 'src/app/ATS/service/sales-consultant.service';

@Component({
  selector: 'app-list-consultant',
  templateUrl: './list-consultant.component.html',
  styleUrls: ['./list-consultant.component.css']
})
export class ListConsultantComponent implements OnInit {

 
  consultant : SalesConsultant[]=[];
  consultant2 = new SalesConsultant();
  message:any;
  showAlert=false;
  registerForm:any= FormGroup;
  submitted = false;

  constructor(private service:SalesConsultantService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        remarks: ['', Validators.required]
  });

    this.getAll();
  }

  get f() { return this.registerForm.controls; }

  getAll(){
    this.service.getAll().subscribe(
      (response:any) => { 
        this.consultant=response.data;
        console.log(response+" kiran"+this.consultant);
       }
    )
  }

  deleteEntity(id:number){
   if(confirm("Are you sure you want to delete this record ?"))
    this.service.deleteEntity(id).subscribe(
      (response:any)=>{console.log(response);
       this.message=response.message;
        this.showAlert=true;
        this.getAll();
      }
    )
  }
  

  UpdateVendor(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return ;
    }
      this.service.toggleStatus(this.consultant2).subscribe(
        (response : any)=>{console.log(response.data)
        const navigationExtras: NavigationExtras= {state: {data: response.message}};
        this.rt.navigate(['/list-consultant'], navigationExtras);
    }
    )
  }

  edit(vms:any){
    this.consultant2=vms;
  }

  closeAlert(){
    this.showAlert=false;
  }

//  for pagination
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  onTableDataChange(event: any) {
    this.page = event;
    this.getAll();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAll();
  }

  search(search:string){

  }
}
