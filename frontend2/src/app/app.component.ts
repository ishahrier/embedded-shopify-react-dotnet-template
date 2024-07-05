import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import createApp, { AppBridgeState, ClientApplication } from '@shopify/app-bridge';
import { ResourcePicker } from "@shopify/app-bridge/actions";
import { getSessionToken } from "@shopify/app-bridge/utilities"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public app: ClientApplication<AppBridgeState> | undefined;
  // @ts-ignore
  public picker: ResourcePicker;
  public token: string | undefined;

  ngOnInit(): void {
    let config: any = {
      apiKey: "5c69d4664f81a66c6d76cb39bd353cf6",
      // The host of the specific shop that's embedding your app. This value is provided by Shopify as a URL query parameter that's appended to your application URL when your app is loaded inside the Shopify admin.
      host: new URLSearchParams(location.search).get("host"),
      forceRedirect: true
    };
    this.app = createApp(config);
     getSessionToken(this.app).then(x=>{
       this.token = x;
    });

    this.picker = ResourcePicker.create(this.app, {
      resourceType: ResourcePicker.ResourceType.Product
    });
    this.picker.subscribe(ResourcePicker.Action.SELECT, (payload: any) => {
      console.log(payload.selection);
    });

  }

  public openPicker(): void {
    this.picker.dispatch(ResourcePicker.Action.OPEN);

  }

  title = 'frontend2';

}


