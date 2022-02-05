import { Component, OnInit } from '@angular/core';
import { OneserviceService } from '../oneservice.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private  serviceTwo:OneserviceService) { }

  information:any;


  ngOnInit(): void {
    this.serviceTwo.getUrl().subscribe((userInformation:any)=>{
      this.information=userInformation;
  })

}
}
