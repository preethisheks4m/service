import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OneserviceService } from '../oneservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:OneserviceService,private router:Router) { }

  data:any;

  loginForm=this.fb.group({
    name:['',[Validators.required,Validators.email]],
    email:['',[Validators.required,Validators.email]]
  })

  ngOnInit(): void {
  //  this.data = this.service.getUrl();

   this.service.getUrl().subscribe((userInfo:any)=>{
     this.data=userInfo;
   })
  }

  get name() {
    return this.loginForm.get('name');
  }

  get email() {
    return this.loginForm.get('email');
  }

  login():any{
    console.log(this.loginForm.value)
    this.data.forEach((element:any) => {
      if(element.email.includes(this.loginForm.value.name) && element.email.includes(this.loginForm.value.email)){

        localStorage.setItem('token',this.loginForm.value.email)
        this.router.navigate(['/dashboard']);
      }
      
    });

  }
}
