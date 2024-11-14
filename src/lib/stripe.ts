import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined.");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-10-28.acacia",
  appInfo: {
    name: "Ignite Shop",
  },
});
