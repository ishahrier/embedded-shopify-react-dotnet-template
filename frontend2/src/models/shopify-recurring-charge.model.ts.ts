export interface ShopifyRecurringCharge {
  activated_on: string | null;
  billing_on: string | null;
  capped_amount: number | null;
  cancelled_on: string | null;
  confirmation_url: string;
  created_at: string | null;
  name: string;
  price: number | null;
  return_url: string;
  status: string;
  terms: string;
  test: boolean | null;
  trial_days: number | null;
  trial_ends_on: string | null;
  updated_at: string | null;
}
