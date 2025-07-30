import { CanDeactivateFn } from '@angular/router';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  let res = confirm("are you sure");
  if(res){
    return true;
  }else{
    return false;
  }
};
