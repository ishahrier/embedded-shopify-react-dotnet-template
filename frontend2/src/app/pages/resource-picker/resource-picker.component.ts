import { Component } from '@angular/core';
import { ResourcePicker } from "@shopify/app-bridge/actions";
import { AppInitializerService } from "../../../services/app-initializer-service";

@Component({
  selector: 'app-resource-picker',
  standalone: true,
  imports: [],
  templateUrl: './resource-picker.component.html',
  styleUrl: './resource-picker.component.css'
})
export class ResourcePickerComponent {
  public picker: any;
  constructor(private appInitService:AppInitializerService) {
    this.picker = ResourcePicker.create(this.appInitService.getApp(), {
      resourceType: ResourcePicker.ResourceType.Product
    });
    this.picker.subscribe(ResourcePicker.Action.SELECT, (payload: any) => {
      console.log(payload.selection);
    });
  }

  public openPicker(): void {
    this.picker.dispatch(ResourcePicker.Action.OPEN);
  }
}
