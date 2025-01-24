"use client";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer/footer";
import { CartProvider } from "./components/context/cartContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider> 
           {/* <TopHeader />  */}
          {/* <Navbar onSearch={function (query: string): void {
            throw new Error("Function not implemented.");
          } }/> */}
          <main className="mt-[150px] px-4 sm:px-6 lg:px-8">{children}</main>  
           <Footer /> {/* Footer at the bottom */}
        </CartProvider>
      </body>
    </html>
  );
}
