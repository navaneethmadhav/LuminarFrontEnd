import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Software Training Center";

  account="Enter your email here";

  email="";
  pswd="";

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  emailChange(event:any){
    console.log(event);
    
    this.email=event.target.value;
    console.log(this.email);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

  // login(a:any,p:any){
  //   // alert('clicked')
  //   var email=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;

  //   if(email in userDetails){
  //     if(pswd==userDetails[email]['password']){
  //       alert('Login Successful')
  //     }
  //     else{
  //           alert('Invalid Password');
  //         }
  //   }
  //   else{
  //       alert('Invalid Userdetails')
  //     }
  // }

  login(){
    // alert('clicked')
    var email=this.loginForm.value.email;
    var pswd=this.loginForm.value.pswd;
    var userDetails=this.ds.userDetails;
    if(this.loginForm.valid){
      const result=this.ds.login(email,pswd);
      if(result){
        alert('Login Successful')
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('Login Failed');
      }
    }
    else{
      alert('Invalid form')
    }
  }
    // if(email in userDetails){
    //   if(pswd==userDetails[email]['password']){
    //     alert('Login Successful')
    //     this.router.navigateByUrl('dashboard')
    //   }
    //   else{
    //         alert('Invalid Password');
    //       }
    // }
    // else{
    //     alert('Invalid Userdetails')
    //   }
  
}
