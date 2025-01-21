"use client";
import React from "react";
import Image from "next/image";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { useCart } from "@/app/components/context/cartContext"; // Import Cart Context

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Access cart state
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-[90%] max-w-[1440px] mx-auto mt-12 p-6 sm:p-8 lg:p-14 bg-[#F0F0F0] rounded-2xl">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-3xl sm:text-4xl font-extrabold my-6">
          Shopping Cart
        </h1>
      </div>

      {/* If Cart is Empty */}
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
          <Link href="/">
            <span className="text-blue-500 hover:underline">Continue Shopping</span>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center w-full sm:w-auto">
                  <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mr-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  {/* Quantity Controls */}
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="bg-gray-200 text-sm px-2 py-1 rounded-md"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="bg-gray-200 text-sm px-2 py-1 rounded-md"
                    >
                      +
                    </button>
                  </div>

                  {/* Total Price for Each Item */}
                  <div className="text-sm font-semibold text-gray-800">
                    ${item.price * item.quantity}
                  </div>

                  {/* Remove Item Button */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 p-4 bg-white rounded-lg shadow-md">
            <div className="font-semibold text-lg">Total: ${totalAmount.toFixed(2)}</div>
            <Link href="/components/checkout">
              <div className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 cursor-pointer">
                Proceed to Checkout
              </div>
            </Link>
          </div>
        </>
      )}

      {/* Floating Cart Icon */}
      <Link href="/cart">
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer">
          <FiShoppingCart size={24} />
        </div>
      </Link>
    </div>
  );
};

export default Cart;
