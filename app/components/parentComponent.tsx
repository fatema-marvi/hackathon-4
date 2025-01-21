import { useState } from "react";
import Navbar from "./navbar/navbar";  // ✅ Import Navbar
import ProductList from "./ProductList"; // ✅ Import Product List

const ParentComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory] = useState("");

  return (
    <div>
      {/* ✅ Pass the search query function to Navbar */}
      <Navbar onSearch={setSearchQuery} /> 

      {/* ✅ Pass the searchQuery to ProductList */}
      <ProductList category={selectedCategory} searchQuery={searchQuery} />
    </div>
  );
};

export default ParentComponent;
