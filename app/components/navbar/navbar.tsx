import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useCart } from "../context/cartContext";
import { useState } from "react";

const Navbar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, items) => acc + (items.quantity || 1), 0);
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);  // Update the state
    onSearch(query);   // Call the onSearch passed as prop
  };

  return (
    <nav className="font-IntegralCF w-full h-[100px] bg-white shadow-md">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center h-full px-6 lg:px-0">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            SHOP.CO
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? "×" : "≡"}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex items-center gap-6 text-base">
            {/* Shop Dropdown */}
            <li className="relative group">
              <Link href="/">
                <span className="flex items-center gap-1 hover:text-gray-700">
                  Shop <RiArrowDropDownLine className="text-2xl" />
                </span>
              </Link>
              {/* Dropdown Menu for Shop */}
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md p-4 z-10 w-48">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/shop/men">
                      <span className="hover:text-gray-700">Men</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/women">
                      <span className="hover:text-gray-700">Women</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/kids">
                      <span className="hover:text-gray-700">Kids</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* Other Nav Items */}
            <li className="hover:text-gray-700">
              <Link href="/on-sale">On Sale</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/newArrival">New Arrivals</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </div>

        {/* Search Bar and Cart Icon */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <label htmlFor="search-input" className="sr-only">Search for products</label>
            <IoSearch className="text-gray-500 text-lg mr-2" />
            <input
              id="search-input"
              name="search"
              type="text"
              placeholder="Search for products..."
              title="Search for products"
              value={search}
              onChange={handleSearch}
              className="bg-transparent outline-none text-sm w-[150px] sm:w-[250px] md:w-[350px]"
            />
          </div>

          {/* Cart Icon */}
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <FiShoppingCart size={24} />
              {/* Optional: Add a badge for item count */}
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
