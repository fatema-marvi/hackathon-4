import React from 'react';
import ProductList from '@/app/components/ProductList';

const MenPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight sm:leading-[57.6px] text-center"
          style={{ textUnderlinePosition: "from-font" }}
        >
          MEN&rsquo;S COLLECTION
        </h1>
      </div>

      {/* Product List */}
      <section className="p-4 sm:p-6 lg:p-10">
        <ProductList category="shirt" searchQuery={""} />
      </section>
    </div>
  );
};

export default MenPage;
