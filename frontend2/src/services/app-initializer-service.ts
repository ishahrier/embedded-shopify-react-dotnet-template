import { Injectable } from "@angular/core";
import createApp, { AppBridgeState, ClientApplication } from '@shopify/app-bridge';

@Injectable({
  providedIn:'root'
})
export  class AppInitializerService{
  private config: any = {
    apiKey: "5c69d4664f81a66c6d76cb39bd353cf6",
    host: new URLSearchParams(location.search).get("host"),
    forceRedirect: true
  };
  // @ts-ignore
  private app: ClientApplication   ;
  public initApp(): void {
    this.app = createApp(this.config);
  }

  public getApp():ClientApplication {
    return this.app;
  }
  constructor() {

  }
}
