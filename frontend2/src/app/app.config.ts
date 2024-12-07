import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { AppInitializerService } from "../services/app-initializer-service";
import { TokenInterceptor } from "./token-interceptor";


export function initializeApp(initService: AppInitializerService) {
  return (): Promise<any> => new Promise<void>((resolve, reject) => {
    initService.initApp();
    resolve();
  });

}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [AppInitializerService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
      deps: [AppInitializerService],
    }
  ]
};



