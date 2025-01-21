import React from 'react';
import Link from 'next/link';

const ShopPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
        Shop Categories
      </h1>

      {/* Category List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li className="text-center">
          <Link href="/shop/men">
            <a className="block text-lg font-semibold text-gray-700 hover:text-gray-900">
              Men&rsquo;S Collection
            </a>
          </Link>
        </li>
        <li className="text-center">
          <Link href="/shop/women">
            <a className="block text-lg font-semibold text-gray-700 hover:text-gray-900">
              Women&rsquo;S Collection
            </a>
          </Link>
        </li>
        <li className="text-center">
          <Link href="/shop/kids">
            <a className="block text-lg font-semibold text-gray-700 hover:text-gray-900">
              Kid&rsquo;S Collection
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopPage;
