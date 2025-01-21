"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/components/context/cartContext";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const ProductDetail = () => {
  const { productId } = useParams(); // ✅ Get the dynamic productId
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // ✅ Cart function

  useEffect(() => {
    if (!productId) return;

    async function fetchProduct() {
      try {
        const data = await client.fetch(
          `*[_type == "products" && _id == $productId][0]{
            _id, name, description, price,
            "imageUrl": image.asset->url,
            category
          }`,
          { productId }
        );

        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
       <Image
        src={product.imageUrl}
        alt={product.name}
        width={800} // Adjust width
        height={600} // Adjust height
        className="w-full h-96 object-cover rounded-lg"
        layout="responsive" // Optional: Makes the image responsive
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-green-600 font-semibold text-lg">${product.price}</p>
      <p className="mt-2 text-gray-700">{product.description}</p>

      <button
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
