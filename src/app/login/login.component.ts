import { Component } from '@angular/core';
import { AuthLoginService } from '../services/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authLoginService:AuthLoginService){

  }

  loginClick(){
    this.authLoginService.onLogin();
  }
}
