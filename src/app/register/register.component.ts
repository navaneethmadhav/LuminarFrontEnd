import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  aim="Software Training Center";

  uname="";
  phn="";
  email="";
  qualification="";
  pswd="";

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    phn:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    qualification:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    // alert('clicked')
    console.log(this.registerForm);
    

    var username=this.registerForm.value.uname;
    var password=this.registerForm.value.pswd;
    var email=this.registerForm.value.email;
    var phone=this.registerForm.value.phn;
    var qualification=this.registerForm.value.qualification;
    if(this.registerForm.valid){
      console.log(this.registerForm.get('uname')?.errors);
      
      const result=this.ds.register(username,password,email,phone,qualification);
      if(result){
        alert('Register Successful')
        this.router.navigateByUrl('')
      }
      else{
        alert('Register Failed')
        this.router.navigateByUrl('register')
      }
    }
    else{
      alert('Invalid form')
    }
  }
}
