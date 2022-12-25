import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //currentUser -  login name
  user="";

  email="";

  sdate:any;

  constructor(private ds:DataService,private router:Router) { 
    this.user=this.ds.currentUser;
    this.sdate=new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentEmail')){
      alert('Please login first')
      this.router.navigateByUrl('')
    }
  }

  logout(){
    localStorage.removeItem('currentEmail')
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl('')
  }

  delete(){
    this.email=JSON.parse(localStorage.getItem('currentEmail')||'');
  }

  onCancel(){
    this.email="";
  }
}
