"use client"; 
import { useEffect, useState } from "react"; 
import { client } from "@/sanity/lib/client"; 
import { useCart } from "@/app/components/context/cartContext"; // ✅ Import Cart Context 
import Link from "next/link"; 
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  tags?: string[];
}

const ProductList = ({ category, searchQuery }: { category: string; searchQuery: string }) => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [showMessage, setShowMessage] = useState(false); // State for showing "Item added to cart" message
  const { addToCart } = useCart(); // ✅ Get `addToCart` function from the CartContext

  useEffect(() => { 
    async function fetchProducts() { 
      try { 
        const query = category 
          ? `*[_type == "products" && category == $category]` 
          : `*[_type == "products"]`; // 🔥 Fetch all products if category is empty

        const data = await client.fetch( 
          `${query} 
          { 
            _id, name, description, price, 
            "imageUrl": image.asset->url, 
            category, tags 
          }`, 
          category ? { category } : {} 
        );

        setProducts(data); 
      } catch (error) { 
        console.error("Error fetching products:", error); 
      } finally { 
        setLoading(false); 
      } 
    }

    fetchProducts();
  }, [category]);

  if (loading) return <p>Loading products...</p>;

  // Filter products based on the search query only when it's not empty
  const FilteredProducts = searchQuery.trim()
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.tags &&
            product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : products; // If no search query, display all products

  // Function to handle adding item to cart
  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product); // Debugging: Check if the button is triggered
    addToCart({ ...product, quantity: 1 });
    setShowMessage(true); // Show message after adding product to cart
    setTimeout(() => {
      setShowMessage(false); // Hide message after 3 seconds
    }, 1000);
  };

  return (
    <div>
      {/* Message shown when item is added to cart */}
      {showMessage && (
        <div className="fixed top-0 left-0 right-0 p-4 bg-green-500 text-white text-center z-50">
          Item added to cart
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
        {FilteredProducts.length > 0 ? (
          FilteredProducts.map((product) => (
            <div
              key={product._id}
              className="border p-3 sm:p-4 rounded-lg shadow-md transition-all duration-300 transform hover:shadow-lg hover:scale-105"
            >
              <Link href={`/product/${product._id}`} passHref>
                <div className="cursor-pointer">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={500} // Adjust width
                    height={500} // Adjust height
                    className="w-full h-40 object-cover rounded-md"
                    layout="responsive" // Optional: Use for responsiveness
                  />
                  <h2 className="text-lg font-bold mt-4">{product.name}</h2>
                </div>
              </Link>

              <p className="text-green-600 font-semibold mt-2">${product.price}</p>

              {/* Button to add the product to the cart */}
              <button
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg w-full sm:w-auto transition-all duration-300 transform hover:bg-blue-600 hover:scale-105"
                onClick={() => handleAddToCart(product)} // Call the new function
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
