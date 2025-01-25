"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const OrderConfirmation = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Thank You for Your Order!</h2>
      {orderId ? (
        <p className="text-gray-700">Your order ID is <strong>{orderId}</strong>.</p>
      ) : (
        <p className="text-gray-700">Your order has been placed successfully.</p>
      )}
      <a href="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md">
        Continue Shopping
      </a>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <OrderConfirmation />
    </Suspense>
  );
}
