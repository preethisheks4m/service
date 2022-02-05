import { Component, OnInit } from '@angular/core';
import { OneserviceService } from '../oneservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private serviceOne:OneserviceService) { }

  details:any;


  ngOnInit(): void {
    this.serviceOne.getUrl().subscribe((userInfo:any)=>{
      this.details=userInfo;
    })

  

  }

 

}
