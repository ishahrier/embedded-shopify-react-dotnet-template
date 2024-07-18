import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { AppInitializerService } from "../services/app-initializer-service";


export function initializeApp(initService:AppInitializerService) {
  return (): Promise<any> => new Promise<void>((resolve, reject) => {
    initService.initApp();
    resolve();
  });

}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    multi: true,
    deps: [AppInitializerService],
  }]
};



