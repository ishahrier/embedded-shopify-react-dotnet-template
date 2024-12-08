import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BillingPlan } from "../models/billing-plan.model";
import { ShopifyRecurringCharge } from "../models/shopify-recurring-charge.model.ts";

@Injectable({
  providedIn: 'root'
})
export class BillingPlanService {

  constructor(private client: HttpClient) {
  }

  public getAllBillingPlans(): Observable<BillingPlan[]> {
    return this.client.get<BillingPlan[]>("/api/charge/getAllBillingPlans")
  }

  public createRecurringChargeForPlan(billingPlanId: number): Observable<ShopifyRecurringCharge> {
    return this.client.post<ShopifyRecurringCharge>("/api/charge/createCharge?billingPlanId=" + billingPlanId, null)
  }
}
