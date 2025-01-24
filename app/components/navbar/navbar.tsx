import { useState, useEffect } from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useCart } from "../context/cartContext";

const Navbar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
    onSearch(query);
  };

  return (
    <nav className={`w-full bg-white shadow-md transition duration-300 ease-in-out ${isScrolled ? "fixed top-0 z-50" : ""}`}>
      <div className="max-w-[1170px] mx-auto flex justify-between items-center h-[80px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">SHOP.CO</Link>
        </div>

        {/* Hamburger Menu */}
        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "×" : "≡"}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex ${isMenuOpen ? "absolute top-[80px] left-0 w-full bg-white shadow-md p-4" : "hidden"} lg:relative lg:top-0 lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-base lg:p-0">
            {/* Shop Dropdown */}
            <li className="relative group">
              <span className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                Shop <RiArrowDropDownLine className="text-2xl" />
              </span>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md p-4 z-10 w-48">
                <ul className="flex flex-col gap-2">
                  <li><Link href="/shop/men">Men</Link></li>
                  <li><Link href="/category/women">Women</Link></li>
                  <li><Link href="/category/kids">Kids</Link></li>
                </ul>
              </div>
            </li>
            <li><Link href="/on-sale">On Sale</Link></li>
            <li><Link href="/newArrival">New Arrivals</Link></li>
            <li><Link href="/brands">Brands</Link></li>
          </ul>
        </div>

        {/* Search & Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <IoSearch className="text-gray-500 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="bg-transparent outline-none text-sm w-[100px] sm:w-[180px] md:w-[250px]"
            />
          </div>

          <Link href="/cart">
            <div className="relative cursor-pointer">
              <FiShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
