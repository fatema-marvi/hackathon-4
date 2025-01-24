
"use client";
import { Hero } from "./components/hero/hero";
import { LogoSection } from "./components/logoSection/logosection";
import NewArrival from "./components/newArrival/newArrival";
import TopSeller from "./components/topsell/topsell";
import DressStyle from "./components/category/category";
import Customer from "./components/customer/customer";
import ProductList from "./components/ProductList";
import { useState } from "react";
import ParentComponent from "./components/parentComponent";
import ProductLike from "./components/productdetail/productyoulike";
import TopHeader from "./components/topheader/topheader";

export default function Home() {
  const [searchQuery] = useState("");

  return (
    <div className="max-w-full h-full flex flex-col items-center ">
      <TopHeader/>
      
     {/* ✅ ParentComponent - Navbar & Filters go here */}
     <ParentComponent/>  
     
      {/* Hero Section */}
      <main className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8"></main>
      <Hero />

      {/* Logo Section */}
      <LogoSection />

      {/* New Arrival Section */}
      <NewArrival />

      {/* Top Seller Section */}
      <TopSeller />

      {/* Dress Style Section */}
      <DressStyle />
      <ProductLike/>
      {/* Product List Section */}
      <section className="p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">All Products</h2>
        <ProductList category={""} searchQuery={searchQuery} />

        {/* Customer Section */}
      <Customer />

      </section>
    </div>
  );
}
