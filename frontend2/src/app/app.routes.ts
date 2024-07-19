import { Routes } from '@angular/router';
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ResourcePickerComponent } from "./pages/resource-picker/resource-picker.component";

export const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'resource-picker',
    component: ResourcePickerComponent
  }
];
