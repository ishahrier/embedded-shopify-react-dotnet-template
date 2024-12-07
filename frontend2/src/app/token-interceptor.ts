import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AppInitializerService } from "../services/app-initializer-service";
import { getSessionToken } from "@shopify/app-bridge/utilities";
import { from, lastValueFrom } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AppInitializerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return from(this.handle(req, next))
  }

  async handle(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const authToken = await getSessionToken(this.auth.getApp());
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return lastValueFrom(next.handle(req));
  }
}
