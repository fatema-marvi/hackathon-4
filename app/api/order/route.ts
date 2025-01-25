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

    // Validate input data (avoid empty values)
    if (!data.name || !data.email || !data.address || !data.city) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the order in Sanity
    const newOrder = await client.create({
      _type: "order",
      name: data.name,
      email: data.email,
      contactNumber: data.contactNumber,
      address: data.address,
      city: data.city,
      paymentMethod: data.paymentMethod,
      cartTotal: data.cartTotal,
      deliveryCharge: data.deliveryCharge,
      grandTotal: data.grandTotal,
      items: data.items || [], // Ensure this is always an array
    });

    // Ensure a valid response body
    return NextResponse.json(
      { success: true, orderId: newOrder._id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order creation failed:", error);

    const errorMessage = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      { success: false, message: "Failed to create order", error: errorMessage },
      { status: 500 }
    );
  }
}
