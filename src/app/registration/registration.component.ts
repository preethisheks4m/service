import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  regForm=this.fb.group({
    regName:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    regPassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]]
  })

  ngOnInit(): void {
  }

  get regName() {
    return this.regForm.get('regName');
  }

  get regPassword() {
    return this.regForm.get('regPassword');
  }

}
