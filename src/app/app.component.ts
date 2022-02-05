import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OneserviceService } from './oneservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';

  constructor(  private route : Router, public servicethree : OneserviceService ) {}

  ngOnInit(): void {};

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.servicethree.loggedIn()
    this.route.navigate(['/login'])
  }
}


