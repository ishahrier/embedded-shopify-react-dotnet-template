import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  // edit request
  let request = req.clone({
    // bring token from sessionStorage and add as header
    setHeaders: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
    }
  });
  return next(request);
}

