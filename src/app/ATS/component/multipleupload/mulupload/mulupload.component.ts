import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mulupload',
  templateUrl: './mulupload.component.html',
  styleUrls: ['./mulupload.component.css']
})
export class MuluploadComponent implements OnInit {
  ngOnInit(): void {
  }

  myFiles:string [] = [];
  
  myForm = new FormGroup({
   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   file: new FormControl('', [Validators.required])
 });
   
 constructor(private http: HttpClient) { }
     
 get f(){
   return this.myForm.controls;
 }
    
 onFileChange(event:any) {
  
       for (var i = 0; i < event.target.files.length; i++) { 
           this.myFiles.push(event.target.files[i]);
       }
 }
     
 submit(){
   const formData = new FormData();

   for (var i = 0; i < this.myFiles.length; i++) { 
     formData.append("files", this.myFiles[i]);
   }
 
   this.http.post('http://localhost:8081/usit/upload', formData)
     .subscribe(res => {
       console.log(res);
       alert('Uploaded Successfully.');
     })
 }
  

}
