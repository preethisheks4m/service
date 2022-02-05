import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OneserviceService } from './oneservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private oneservice:OneserviceService ,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.oneservice.loggedIn()

      if(this.oneservice.loggedIn()){
        return true;
        }
        else{
          this.route.navigate(['/login'])
          return false;
        }

      }
  }
  

