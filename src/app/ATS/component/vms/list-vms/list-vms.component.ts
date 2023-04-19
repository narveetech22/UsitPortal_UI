import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/ATS/modal/vendor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { VmsService } from 'src/app/ATS/service/vms.service';

@Component({
  selector: 'app-list-vms',
  templateUrl: './list-vms.component.html',
  styleUrls: ['./list-vms.component.css']
})
export class ListVmsComponent implements OnInit {

  vendor : Vendor[]=[];
  vendor2 = new Vendor();
  message:any;
  showAlert=false;
  registerForm:any= FormGroup;
  submitted = false;
  query!:string;
  totalpageno=new Array<number>;
  totalPages:number=0;
  currentPage=1;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  
  tableSizes: any = [3, 6, 9, 12];

  constructor(private vendorService:VmsService,private route:ActivatedRoute,private rt:Router,private formBuilder: FormBuilder) { 
  }
  setpages(pageno:number){
    this.page=pageno;
    this.currentPage=pageno;
    this.getAllvendor2();
  }
  ngOnInit(): void {
   // console.log("kirrraaannnn")
   this.getAllvendor2();
   // this.getAllvendor();
    this.registerForm = this.formBuilder.group({
        remarks: ['', Validators.required]
  });

    
  }

  get f() { return this.registerForm.controls; }

  getAllvendor(){
    this.vendorService.getVendorlist().subscribe(
      (response:any) => { 
        this.vendor=response.data;
       // console.log(JSON.stringify(response)+" kiran"+this.vendor);
       }
    )
  }

  onTableDataChange(event: any) {
    this.page = event;
    //this.getAllvendor2();
    this.getAllvendor();
  }
  getAllvendor2(){
   // console.log("kkkkkkkkkkk")
    this.vendorService.getVendorlistt(this.page).subscribe(
      (response:any) => { 
        this.vendor=response.data;
        this.totalpageno=new Array(response.size);
        this.totalPages=response.size;
        console.log(JSON.stringify(response)+" kiran ==="+this.totalpageno.length+" -- "+response.size);
       }
    )

  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
   // this.getAllvendor();
  }

  deleteVendor(id:number){
   //if(confirm("Are you sure you want to delete this record ?"))
   this.vendorService.deleteVendor(id)
    .subscribe(()=> {
        this.getAllvendor();
    });
    // this.vendorService.deleteVendor(id).subscribe(
    //   (response:any)=>{//console.log(response);
    //   // this.message=response.message;
    //   //  this.showAlert=true;
    //   console.log("kirrraaannnn")
    //     this.ngOnInit();
    //     console.log("kirrraaannnn")
    //     //const navigationExtras: NavigationExtras= {state: {data: response.message}};
    //           this.rt.navigate(['./list-vms']);
    //   }
    // )
  }

  UpdateVendor(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return ;
    }
      this.vendorService.VendorStatus(this.vendor2).subscribe(
        (response : any)=>{//console.log(response.data)
        const navigationExtras: NavigationExtras= {state: {data: response.message}};
        this.rt.navigate(['/list-vms'], navigationExtras);
    }
    )
  }

  search(search:string){
    if(search==""){
      search = "dummysearch";
    }
     this.vendorService.search(search).subscribe(
      (response : any)=>{//console.log(response.data)
        this.vendor=response.data;
     }
    )
  }


  edit(vms:any){
    this.vendor2=vms;
  }

  closeAlert(){
    this.showAlert=false;
  }
}
