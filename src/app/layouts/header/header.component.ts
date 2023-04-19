import { Component, OnInit, Inject, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { User } from 'src/app/ATS/modal/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usarName!:any;
  userId!:any;
  @Output() user: User = new User();
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    console.log("kk "+this.user)
    this.usarName =   localStorage.getItem('userName');
    this.userId = localStorage.getItem('userid');
    this.usarName = this.usarName.replace(/['\"]+/g, '');
    console.log(this.usarName.replace(/['\"]+/g, '')+'  '+localStorage.getItem('userName')+' '+JSON.stringify(localStorage.getItem('userName')).replace(/['"]+/g, ''))
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
