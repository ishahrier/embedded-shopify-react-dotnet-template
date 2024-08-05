import { Component } from '@angular/core';
import { getSessionToken } from "@shopify/app-bridge/utilities";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppInitializerService } from "../../../services/app-initializer-service";
import { JsonPipe } from "@angular/common";
import { Redirect } from "@shopify/app-bridge/actions";
import { Action } from "@shopify/app-bridge-core/actions/Navigation/Redirect";

@Component({
  selector: 'app-needs-subscription',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './needs-subscription.component.html',
  styleUrl: './needs-subscription.component.css'
})
export class NeedsSubscriptionComponent {

  constructor(private appInitService:AppInitializerService,private client: HttpClient) {
  }
  public charge: any;
  public createRecCharge(): void {
    getSessionToken(this.appInitService.getApp()).then(token => {
      const header = new HttpHeaders().set('Authorization', 'Bearer ' + token + '');
      const headers = {headers: header};
      this.client.get("/api/charge/getCharge", headers).subscribe({
        next: (x) => {
          this.charge = x;
          const redirect = Redirect.create(this.appInitService.getApp());
          redirect.dispatch(Action.REMOTE, this.charge.confirmationUrl);
        },
        error: e => {
          alert('Error getting recurring charge');
        }
      })
    });

  }
}
