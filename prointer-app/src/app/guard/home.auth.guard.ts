import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/oauth.service';

@Injectable()
export class HomeAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate() {
    if (this.authService.isAgenteAuthenticated()) {
      return true;
    }
    this.router.navigate(['login']);
  }

}
