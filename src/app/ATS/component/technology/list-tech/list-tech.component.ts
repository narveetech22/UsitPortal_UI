import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from 'src/app/ATS/modal/technology';
import { TechnologyService } from 'src/app/ATS/service/technology.service';

@Component({
  selector: 'app-list-tech',
  templateUrl: './list-tech.component.html',
  styleUrls: ['./list-tech.component.css']
})
export class ListTechComponent implements OnInit {

  technology : Technology[]=[];
  technology2 = new Technology();
  message:any;
  showAlert=false;
  registerForm:any= FormGroup;
  submitted = false;

  constructor(private technologyService:TechnologyService,private activatedroute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }
  get f() { return this.registerForm.controls; }

  getAllvendor(){
    this.technologyService.getTechnologylist().subscribe(
      (response:any) => { 
        this.technology=response.data;
       }
    )
  }
}
