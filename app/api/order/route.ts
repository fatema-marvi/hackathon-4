import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false, // ❌ Disable CDN for write operations
  token: process.env.SANITY_API_TOKEN, // ✅ Pass token explicitly
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Received Order Data:", data); // Debugging

    // ✅ Fix: Validate fields correctly inside `customer`
    const requiredCustomerFields = ["name", "email", "contactNumber", "address", "city"];
    for (const field of requiredCustomerFields) {
      if (!data.customer?.[field]) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // ✅ Fix: Validate `cartItems` instead of `items`
    if (!data.cartItems || !Array.isArray(data.cartItems) || data.cartItems.length === 0) {
      return NextResponse.json(
        { success: false, message: "Cart is empty" },
        { status: 400 }
      );
    }

    // ✅ Fix: Use correct structure for Sanity
    const newOrder = await client.create({
      _type: "order",
      customer: {
        name: data.customer.name,
        email: data.customer.email,
        contactNumber: data.customer.contactNumber,
        address: data.customer.address,
        city: data.customer.city,
      },
      paymentMethod: data.paymentMethod,
      cartTotal: data.cartTotal,
      deliveryCharge: data.deliveryCharge,
      grandTotal: data.grandTotal,
      items: data.cartItems, // ✅ Use `cartItems` instead of `items`
    });

    return NextResponse.json(
      { success: true, orderId: newOrder._id },
      { status: 200 }
    );

  } catch (error) {
    console.error("Order creation failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create order", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
