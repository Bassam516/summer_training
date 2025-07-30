import {CanActivateFn, Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = new Router();
  if(localStorage.getItem("isLogin") == "true"){
    return true;
  }else {
    router.navigate(['/login']);
    return false;
  }
};
