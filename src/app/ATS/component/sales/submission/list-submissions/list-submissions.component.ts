import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SalesSubmissions } from 'src/app/ATS/modal/sales-submissions';
import { SalesSubmissionServiceService } from 'src/app/ATS/service/sales-submission-service.service';

@Component({
  selector: 'app-list-submissions',
  templateUrl: './list-submissions.component.html',
  styleUrls: ['./list-submissions.component.css']
})
export class ListSubmissionsComponent implements OnInit {
  entity : SalesSubmissions[]=[];
  entityupd = new SalesSubmissions();
  message:any;
  showAlert=false;
  registerForm:any= FormGroup;
  submitted = false;

  constructor(private service:SalesSubmissionServiceService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        remarks: ['', Validators.required]
  });
    this.getAll();
  }

  get f() { return this.registerForm.controls; }

  getAll(){
    this.service.getlist().subscribe(
      (response:any) => { 
        this.entity=response.data;
        console.log(response+" kiran"+this.entity);
       }
    )
  }

  // deleteEntity(id:number){
  //  if(confirm("Are you sure you want to delete this record ?"))
  //   this.service.deleteEntity(id).subscribe(
  //     (response:any)=>{console.log(response);
  //      this.message=response.message;
  //      const navigationExtras: NavigationExtras= {state: {data: response.message}};
  //      this.rt.navigate(['/list-submissions'], navigationExtras);
  //     }
  //   )
  // }

  deleteEntity(id:number){
    this.service.deleteEntity(id).subscribe(
      (response:any)=>{console.log(response)
       const navigationExtras: NavigationExtras= {state: {data: response.message}};
       this.rt.navigate(['/list-submissions'], navigationExtras);
      }
    )
  }

  edit(vms:any){
    this.entityupd=vms;
  }

  closeAlert(){
    this.showAlert=false;
  }
  search(search:string){

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
}
