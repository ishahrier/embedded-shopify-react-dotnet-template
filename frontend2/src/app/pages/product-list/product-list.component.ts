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
      this.client.get("/api/products").subscribe({
        next: (x) => {
          alert("success");
        },
        error: e => {
          alert("error");
        }
      })
  }
}
