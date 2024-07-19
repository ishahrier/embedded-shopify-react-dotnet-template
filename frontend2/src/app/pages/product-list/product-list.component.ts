import { Component } from '@angular/core';
import { getSessionToken } from "@shopify/app-bridge/utilities";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppInitializerService } from "../../../services/app-initializer-service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private appInitService: AppInitializerService,public client: HttpClient) {
  }
  public callBackEndController(): void {
    getSessionToken(this.appInitService.getApp()).then(token => {
      const header = new HttpHeaders().set('Authorization', 'Bearer ' + token + '');
      const headers = {headers: header};
      this.client.get("/api/products", headers).subscribe({
        next: (x) => {
          alert("success");
        },
        error: e => {
          alert("error");
        }
      })
    });

  }
}
