import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private isLoogedIn:boolean = false;
  constructor(private router:Router) { }

  public onLogin(){
    this.isLoogedIn=true;
  }

  public checkLogin(){
    return this.isLoogedIn;
  }

  public redirectToLogin(){
    this.router.navigateByUrl("");
  }
}
