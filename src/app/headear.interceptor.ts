import { HttpInterceptorFn } from '@angular/common/http';

export const headearInterceptor: HttpInterceptorFn = (req, next) => {
  let newReq = req.clone({
    headers: req.headers.set("token","generated token")
  })
  return next(newReq);
};
