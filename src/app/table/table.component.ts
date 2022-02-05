import { Component, OnInit } from '@angular/core';
import { OneserviceService } from '../oneservice.service';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
    userEmail:['',[Validators.required,Validators.email]],
    userCity:['',[Validators.required]],
    userCompany:['',[Validators.required]],
})

  constructor(private serviceOne1:OneserviceService,private fb:FormBuilder) { }

  tableData:any;
  addUser:any={};

  ngOnInit(): void {

    this.serviceOne1.getUrl().subscribe((user:any)=>{
      this.tableData=user;
    })

    this.addUser={
      name:'',
      email:'',
      city:'',
      company:''


    }
  }

  get userName() {
    return this.tableForm.get('userName');
  }

  get userEmail() {
    return this.tableForm.get('userEmail');
  }
  get userCity() {
    return this.tableForm.get('userCity');
  }
  get userCompany(){
    return this.tableForm.get('userCompany');
  }

 

  update()
  {
    console.log(this.tableForm.value)
    this.tableData.push(this.addUser)
    localStorage.setItem('user',this.tableForm.value.userName)
    localStorage.setItem('usermail',this.tableForm.value.userEmail)


  }


}
