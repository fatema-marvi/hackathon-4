// ./schemas/order.js or ./schemas/order.ts
export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    { name: "name", type: "string", title: "Customer Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "contactNumber", type: "string", title: "Contact Number" },
    { name: "address", type: "text", title: "Address" },
    { name: "city", type: "string", title: "City" },
    { name: "paymentMethod", type: "string", title: "Payment Method" },
    { name: "cartTotal", type: "number", title: "Cart Total" },
    { name: "deliveryCharge", type: "number", title: "Delivery Charge" },
    { name: "grandTotal", type: "number", title: "Grand Total" },
    {
      name: "items",
      type: "array",
      title: "Order Items",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", type: "string", title: "Product ID" },
            { name: "name", type: "string", title: "Product Name" },
            { name: "price", type: "number", title: "Price" },
            { name: "quantity", type: "number", title: "Quantity" },
          ],
        },
      ],
    },
  ],
};
