"use client"; 
import React from "react";
import ProductList from "../ProductList";

const ProductLike = () => {
  return (
    <div className="text-center mt-12 mb-6 px-6 sm:px-12">
      <h1
        className="font-IntegralCF text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight sm:leading-[57.6px] text-center"
        style={{ textUnderlinePosition: "from-font" }}
      >
        PRODUCT YOU MAY LIKE
      </h1>

      <section className="mt-6 sm:mt-10">
        <ProductList category="Hoddie" searchQuery={""} />
      </section>
    </div>
  );
};

export default ProductLike;
