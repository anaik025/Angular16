import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthLoginService } from '../services/auth-login.service';

export const authGuard: CanActivateFn = (route, state) :  boolean => {
  const oauthService: AuthLoginService = inject(AuthLoginService);

  if(oauthService.checkLogin()){
    return true;
  }else {
    oauthService.redirectToLogin();
    return false;
  }
};
