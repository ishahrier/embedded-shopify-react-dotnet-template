import { Routes } from '@angular/router';
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ResourcePickerComponent } from "./pages/resource-picker/resource-picker.component";
import { NeedsSubscriptionComponent } from "./pages/needs-subscription/needs-subscription.component";

export const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'resource-picker',
    component: ResourcePickerComponent
  },
  {
    path: 'needs-subscription',
    component: NeedsSubscriptionComponent
  }
];
