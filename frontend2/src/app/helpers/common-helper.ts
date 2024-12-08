import { Redirect } from "@shopify/app-bridge/actions";
import { Injectable } from "@angular/core";
import { AppInitializerService } from "../../services/app-initializer-service";

@Injectable()
export class CommonHelper {
    constructor(private appInitService: AppInitializerService) {
    }

    public redirect(action: any /*Redirect.Action*/, urlToRedirect: string): any {
        const redirect = Redirect.create(this.appInitService.getApp());
        redirect.dispatch(action, urlToRedirect);
    }
}
