import { Component, OnInit } from '@angular/core';
import { Redirect } from "@shopify/app-bridge/actions";
import { CommonHelper } from "../../helpers/common-helper";
import { BillingPlanService } from "../../../services/billing-plan-service";
import { BillingPlan } from "../../../models/billing-plan.model";

@Component({
  selector: 'app-needs-subscription',
  standalone: true,
  imports: [],
  providers: [CommonHelper, BillingPlanService],
  templateUrl: './needs-subscription.component.html',
  styleUrl: './needs-subscription.component.css'
})
export class NeedsSubscriptionComponent implements OnInit {
  protected billingPlans: BillingPlan[] = [];

  constructor(
    private billingPlanService: BillingPlanService,
    private commonHelper: CommonHelper) {
  }

  ngOnInit(): void {
    this.billingPlanService.getAllBillingPlans().subscribe({
      next: x => {
        this.billingPlans = x;
      },
      error: e => {
        alert('Error getting the list of billing plans');
      }
    })
  }


  public createRecCharge(planId: number): void {
    this.billingPlanService.createRecurringChargeForPlan(planId).subscribe({
      next: (x: any) => {
        this.commonHelper.redirect(Redirect.Action.REMOTE, x.confirmationUrl);
      },
      error: e => {
        alert('Error creating recurring charge for selected billing plan');
      }
    })
  }
}
