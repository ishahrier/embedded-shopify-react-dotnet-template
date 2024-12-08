export interface BillingPlan {
  id: number;
  price: number;
  isTestMode: boolean;
  trialDays: number;
  returnUrl: string;
  planName: string;
  bulletPoints: string;
  isBestValue: boolean;
}
