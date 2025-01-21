"use client"
import React from "react";
import ProductList from "../ProductList";


  const TopSeller = () => {

    // function handleAddToCart(product: any): void {
    //   throw new Error("Function not implemented.");
    // }

    return (
    
      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center"
          style={{ textUnderlinePosition: "from-font" }}
        >
          TOP SELLING
        </h1>
        <section className="p-10">
      <ProductList category="shirt" searchQuery={""} />
     
    </section>
   

        {/* Centered View All Button Inside Card Section */}
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
        </div>
      </div>
    
  );
};

export default TopSeller;