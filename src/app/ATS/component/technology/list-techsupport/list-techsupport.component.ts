import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Techandsupport } from 'src/app/ATS/modal/techandsupport';
import { TechsupportService } from 'src/app/ATS/service/techsupport.service';

@Component({
  selector: 'app-list-techsupport',
  templateUrl: './list-techsupport.component.html',
  styleUrls: ['./list-techsupport.component.css']
})
export class ListTechsupportComponent implements OnInit {

  tech : Techandsupport[]=[];
  techent = new Techandsupport();
  message:any;
  showAlert=false;
  registerForm:any= FormGroup;
  submitted = false;

  // for pagination
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service:TechsupportService,private activatedroute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllvendor();
  }
  get f() { return this.registerForm.controls; }

  getAllvendor(){
    this.service.getAll().subscribe(
      (response:any) => { 
        this.tech=response.data;
        console.log(response+" ")
       }
    )
  }

  search(search:string){
    this.service.search(search).subscribe(
      (response:any) => { 
        this.tech=response.data;
        console.log(response+" ")
       }
    )
  }

  edit(entity:any){
    this.techent = entity;
  }

  deleteEntity(id:number){
  if(confirm("Are you sure you want to delete this record ?"))
    this.service.deleteEntity(id).subscribe(
      (response:any)=>{//console.log(response);
       this.message=response.message;
        this.showAlert=true;
        this.getAllvendor();
      }
    )
  }

  Updatestatus(){
    this.submitted = true;
    if (this.registerForm.invalid) {
        return ;
    }
      this.service.Status(this.techent).subscribe(
        (response : any)=>{//console.log(response.data)
        const navigationExtras: NavigationExtras= {state: {data: response.message}};
        this.router.navigate(['/list-techsupport'], navigationExtras);
    }
    )
  }

  // for pagination
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllvendor();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllvendor();
  }
}
