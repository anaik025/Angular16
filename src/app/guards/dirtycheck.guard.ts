import { CanDeactivateFn } from '@angular/router';

export const dirtycheckGuard: CanDeactivateFn<any> = (component, currentroute, currentstate, nextstate) => {
  
  if(confirm("Are you sure?")){
    return true;
  }
  else {
    return false;
  }
};
