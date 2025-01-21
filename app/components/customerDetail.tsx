"use client";
import { useState } from "react";
import { useCart } from "@/app/components/context/cartContext";
import { useRouter } from "next/navigation";

const CustomerDetail = () => {
  const { cart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    city: "",
    paymentMethod: "Cash on Delivery",
  });

  const [error, setError] = useState<string | null>(null); // New state for error handling

  const deliveryCharge = 250;
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const grandTotal = cartTotal + deliveryCharge;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before new request

    try {
      const orderResponse = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          contactNumber: form.contactNumber,
          address: form.address,
          city: form.city,
          paymentMethod: form.paymentMethod,
          cartTotal,
          deliveryCharge,
          grandTotal,
          items: cart.map((item) => ({
            productId: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderData.message || "Failed to create order");
      }

      console.log("Order created successfully:", orderData);

      router.push("/order-confirmation");
    } catch (error) {
      console.error("Error creating order:", error);
      if (error instanceof Error) {
        setError(error.message || "An unexpected error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Customer Details</h2>

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="text" name="contactNumber" placeholder="Contact Number" required onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="text" name="address" placeholder="Full Address" required onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="text" name="city" placeholder="City" required onChange={handleChange} className="w-full p-2 border rounded-md" />
        <select name="paymentMethod" onChange={handleChange} className="w-full p-2 border rounded-md">
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Credit Card">Credit Card</option>
        </select>

        <div className="mt-4">
          <p>Cart Total: ${cartTotal.toFixed(2)}</p>
          <p>Delivery Charge: ${deliveryCharge.toFixed(2)}</p>
          <p className="font-bold">Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CustomerDetail;
