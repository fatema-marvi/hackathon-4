import React from "react";
import ProductList from "../ProductList";

const Casual = () => {
  return (
    <div className="text-center mt-12 mb-6">
      <h1
        className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center"
        style={{ textUnderlinePosition: "from-font" }}
      >
        CASUAL DRESSES
      </h1>

      {/* T-Shirts Section */}
      <section className="p-10">
        <h2 className="text-2xl font-bold">T-Shirts</h2>
        <ProductList category="tshirt" searchQuery={""} />
      </section>

      {/* shorts Section */}
      <section className="p-10">
        <h2 className="text-2xl font-bold">Short</h2>
        <ProductList category="short" searchQuery={""} />
      </section>
     
      {/* Shirts Section */}
      <section className="p-10">
        <h2 className="text-2xl font-bold">Shirts</h2>
        <ProductList category="shirt" searchQuery={""} />
      </section>
      {/* Description Section */}
      <div className="mt-20 text-center">
        <p className="font-Satoshi text-lg text-gray-700">
          Browse through our exclusive casual wear collection. Comfortable,
          stylish, and perfect for everyday wear. Get the latest trends in
          casual fashion now!
        </p>
      </div>
    </div>
  );
};

export default Casual;