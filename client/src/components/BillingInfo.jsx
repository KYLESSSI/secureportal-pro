import { useEffect } from 'react';

export default function BillingInfo() {
  useEffect(() => {
    // TODO: fetch billing details
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold">Billing</h2>
      {/* TODO: show subscription status and link to Stripe customer portal */}
    </div>
  );
}
