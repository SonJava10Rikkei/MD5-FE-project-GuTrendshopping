import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";


@Injectable({
  providedIn: 'root'
})
export class CheckRoll implements CanActivate {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if ((JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['ADMIN'])) || (JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['PM']))) {
      return true;
    } else {
      this.router.navigate(['error-404'])
    }

  }

}
