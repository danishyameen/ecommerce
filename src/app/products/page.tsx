"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"
import comparePic from "@/app/images/compare.png"
import product_1 from "@/app/images/products/Rectangle.png"
import product_2 from "@/app/images/products/Rectangle (1).png"
import product_3 from "@/app/images/products/Rectangle (2).png"
import product_4 from "@/app/images/products/Rectangle (3).png"
import product_5 from "@/app/images/products/Rectangle (4).png"
import product_6 from "@/app/images/products/Rectangle (5).png"
import product_7 from "@/app/images/products/Rectangle (6).png"
import product_8 from "@/app/images/products/Rectangle (7).png"
import product_9 from "@/app/images/products/Rectangle (8).png"
import product_10 from "@/app/images/products/Rectangle (9).png"
import product_11 from "@/app/images/products/Rectangle (10).png"
import product_12 from "@/app/images/products/Rectangle (11).png"
import product_13 from "@/app/images/products/Rectangle (12).png"
import product_14 from "@/app/images/products/Rectangle (13).png"
import product_15 from "@/app/images/products/Rectangle (14).png"
import product_16 from "@/app/images/products/Rectangle (15).png"
import product_17 from "@/app/images/products/Rectangle (16).png"
import product_18 from "@/app/images/products/Rectangle (17).png"
import product_19 from "@/app/images/products/Rectangle (18).png"
import product_20 from "@/app/images/products/Rectangle (19).png"
import product_21 from "@/app/images/products/Rectangle (20).png"
import product_22 from "@/app/images/products/Rectangle (21).png"
import product_23 from "@/app/images/products/Rectangle (22).png"
import product_24 from "@/app/images/products/Rectangle (23).png"
import product_25 from "@/app/images/products/Rectangle (24).png"
import product_26 from "@/app/images/products/Rectangle (25).png"
import product_27 from "@/app/images/products/Rectangle.jpg"
import product_28 from "@/app/images/products/Rectangle (26).png"
import product_29 from "@/app/images/products/Rectangle (27).png"
import product_30 from "@/app/images/products/Rectangle (28).png"
import { Menu } from "lucide-react"

const products = [
  // Add all product imports here
  {
    id: 1,
    image: product_1,
    badge: "Just In",
    title: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 10 795.00"
  },
  {
    id: 2,
    image: product_2,
    badge: "Just In",
    title: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 4 995.00"
  },
  {
    id: 3,
    image: product_3,
    badge: "Just In",
    title: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 8 695.00"
  },
  {
    id: 4,
    image: product_4,
    badge: "Just In",
    title: "Nike Air Force 1 React",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 13 295.00"
  },
  {
    id: 5,
    image: product_5,
    badge: "Promo Exclusion",
    title: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 11 895.00"
  },
  {
    id: 6,
    image: product_6,
    badge: "Just In",
    title: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    colors: 1,
    price: "₹ 2 895.00"
  },
  {
    id: 7,
    image: product_7,
    badge: "Promo Exclusion",
    title: "Nike Dunk Low Retro SE",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 9 695.00"
  },
  {
    id: 8,
    image: product_8,
    badge: "Sustainable Materials",
    title: "Nike Dri-FIT UV Hyverse",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    colors: 1,
    price: "₹ 2 495.00"
  },
  {
    id: 9,
    image: product_9,
    badge: "Just In",
    title: "Nike Court Vision Low",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 5 695.00"
  },
  {
    id: 10,
    image: product_10,
    badge: "Just In",
    title: "Nike Dri-FIT Ready",
    category: "Men's Short-Sleeve Fitness Top",
    colors: 3,
    price: "₹ 2 495.00"
  },
  {
    id: 11,
    image: product_11,
    badge: "Just In",
    title: "Nike One Leak Protection: Period",
    category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    colors: 2,
    price: "₹ 3 395.00"
  },
  {
    id: 12,
    image: product_12,
    badge: "Just In",
    title: "Nike Air Force 1 LV8 3",
    category: "Older Kids' Shoe",
    colors: 1,
    price: "₹ 7 495.00"
  },
  {
    id: 13,
    image: product_13,
    badge: "Just In",
    title: "Nike Blazer Low Platform",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 8 195.00"
  },
  {
    id: 14,
    image: product_14,
    badge: "Just In",
    title: "Nike Air Force 1 '07",
    category: "Women's Shoe",
    colors: 1,
    price: "₹ 8 195.00"
  },
  {
    id: 15,
    image: product_15,
    badge: "Just In",
    title: "Nike Pro Dri-FIT",
    category: "Men's Tight-Fit Sleeveless Top",
    colors: 1,
    price: "₹ 1 495.00"
  },
  {
    id: 16,
    image: product_16,
    badge: "Just In",
    title: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 8 695.00"
  },
  {
    id: 17,
    image: product_17,
    badge: "Just In",
    title: "Nike Air Max SC",
    category: "Women's Shoes",
    colors: 2,
    price: "₹ 5 995.00"
  },
  {
    id: 18,
    image: product_18,
    badge: "Just In",
    title: "Nike Dri-FIT UV Miler",
    category: "Men's Short-Sleeve Running Top",
    colors: 1,
    price: "₹ 1 695.00"
  },
  {
    id: 19,
    image: product_19,
    badge: "Just In",
    title: "Nike Air Max SYSTM",
    category: "Older Kids' Shoes",
    colors: 1,
    price: "₹ 6 495.00"
  },
  {
    id: 20,
    image: product_20,
    badge: "Just In",
    title: "Nike Alate All U",
    category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
    colors: 1,
    price: "₹ 2 195.00"
  },
  {
    id: 21,
    image: product_21,
    badge: "Just In",
    title: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    colors: 2,
    price: "₹ 7 495.00"
  },
  {
    id: 22,
    image: product_22,
    badge: "Just In",
    title: "Nike Swoosh",
    category: "Women's Medium-support Padded Sports Bra Tank",
    colors: 2,
    price: "₹ 3 095.00"
  },
  {
    id: 23,
    image: product_23,
    badge: "Just In",
    title: "Nike SB Zoom Janoski OG+",
    category: "Shoes",
    colors: 1,
    price: "₹ 8 595.00"
  },
  {
    id: 24,
    image: product_24,
    badge: "Just In",
    title: "Nike Dri-FIT Run Division Rise 365",
    category: "Men's Running Tank",
    colors: 2,
    price: "₹ 3 495.00"
  },
  {
    id: 25,
    image: product_25,
    badge: "Just In",
    title: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    colors: 1,
    price: "₹ 2 495.00"
  },
  {
    id: 26,
    image: product_26,
    badge: "Just In",
    title: "Jordan Series ES",
    category: "Men's Shoes",
    colors: 2,
    price: "₹ 7 495.00"
  },
  {
    id: 27,
    image: product_27,
    badge: "Just In",
    title: "Nike Outdoor Play",
    category: "Older Kids' Oversized Woven Jacket",
    colors: 1,
    price: "₹ 3 895.00"
  },
  {
    id: 28,
    image: product_28,
    badge: "Just In",
    title: "Nike Sportswear Trend",
    category: "Older Kids' (Girls') High-waisted Woven Shorts",
    colors: 2,
    price: "₹ 2 495.00"
  },
  {
    id: 29,
    image: product_29,
    badge: "Just In",
    title: "Nike Blazer Low '77 Jumbo",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 8 595.00"
  },
  {
    id: 30,
    image: product_30,
    badge: "Just In",
    title: "Nike SB Force 58",
    category: "Skate Shoe",
    colors: 1,
    price: "₹5,995.00",
  },
  // ... repeat for all products
]

const filters = [
  {
    title: "Gender",
    options: ["Men", "Women", "Unisex"]
  },
  {
    title: "Kids",
    options: ["Boys", "Girls"]
  },
  {
    title: "Shop By Price",
    options: ["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"]
  }
]

const categories = [
  "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts",
  "Jackets", "Trousers & Tights", "Shorts", "Tracksuits",
  "Jumpsuits & Rompers", "Skirts & Dresses", "Accessories & Equipment"
]

const tags = [
  "Best Selling Products", "Best Shoes", "New Basketball Shoes",
  "New Football Shoes", "New Men's Shoes", "New Running Shoes",
  "Best Men's Shoes", "New Jordan Shoes", "Best Women's Shoes",
  "Best Training & Gym"
]

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl lg:text-3xl font-medium animate-fade-in">New (500)</h1>
        <div className="flex gap-4 md:gap-6">
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-lg">Hide Filters</span>
            <Image
              src={comparePic}
              alt="Compare products"
              width={24}
              height={24}
              className="shrink-0"
            />
          </button>
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span className="text-lg">Sort By</span>
            <IoIosArrowDown className="w-5 h-5 mt-0.5" />
          </button>
        </div>
      </header>

      {/* Mobile Filters */}
      <div className="block md:hidden mb-10">
        <Sheet>
          <SheetTrigger className="bg-white p-4 rounded-lg border border-gray-200 w-auto animate-slide-in-left"><Menu /></SheetTrigger>
          <SheetContent side="right" className="max-h-100 overflow-y-auto animate-slide-in-right">
            <aside className="lg:col-span-3 space-y-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h2 className="text-lg font-medium mb-4">Categories</h2>
                <ul className="space-y-3 max-h-60 overflow-y-auto">
                  {categories.map((category, index) => (
                    <li key={index} className="text-base hover:text-primary cursor-pointer transition-transform transform hover:scale-105">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {filters.map((filter, index) => (
                <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`filter-${index}`}>
                      <AccordionTrigger className="text-lg font-medium hover:no-underline">
                        {filter.title}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 space-y-3">
                        {filter.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                            <input
                              type="checkbox"
                              className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
                            />
                            <span className="text-base">{option}</span>
                          </label>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </aside>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-3 space-y-6 hidden md:block">
          <div className="bg-white p-4 rounded-lg border border-gray-200 animate-slide-in-left">
            <h2 className="text-lg font-medium mb-4">Categories</h2>
            <ul className="space-y-3 max-h-60 overflow-y-auto">
              {categories.map((category, index) => (
                <li key={index} className="text-base hover:text-primary cursor-pointer transition-transform transform hover:scale-105">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {filters.map((filter, index) => (
            <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
              <Accordion type="single" collapsible>
                <AccordionItem value={`filter-${index}`}>
                  <AccordionTrigger className="text-lg font-medium hover:no-underline">
                    {filter.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 space-y-3">
                    {filter.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                        <input
                          type="checkbox"
                          className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
                        />
                        <span className="text-base">{option}</span>
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </aside>

        {/* Products Grid */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article key={product.id} className="group relative bg-white p-4 rounded-lg border border-gray-200 animate-fade-in-up">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity transform hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 space-y-2">
                  {product.badge && (
                    <span className="block text-sm font-medium text-[#9E3500] animate-pulse">
                      {product.badge}
                    </span>
                  )}
                  <h2 className="text-lg font-medium">{product.title}</h2>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-gray-600">{product.colors} Colour</p>
                  <p className="text-lg font-medium">MRP: ₹ {product.price}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Related Tags */}
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm border-2  cursor-pointer border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors transform hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


// export default function ProductsPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Page Header */}
//       <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//         <h1 className="text-2xl lg:text-3xl font-medium">New (500)</h1>
//         <div className="flex gap-4 md:gap-6">
//           <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//             <span className="text-lg">Hide Filters</span>
//             <Image
//               src={comparePic}
//               alt="Compare products"
//               width={24}
//               height={24}
//               className="shrink-0"
//             />
//           </button>
//           <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
//             <span className="text-lg">Sort By</span>
//             <IoIosArrowDown className="w-5 h-5 mt-0.5" />
//           </button>
//         </div>
//       </header>
//       <div className=" block md:hidden mb-10">
//         <Sheet>
//           <SheetTrigger className="bg-white p-4 rounded-lg border border-gray-200 w-auto"><Menu /></SheetTrigger>
//           <SheetContent side="right" className="max-h-100 overflow-y-auto">
//           <aside className="lg:col-span-3 space-y-6 ">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h2 className="text-lg font-medium mb-4">Categories</h2>
//             <ul className="space-y-3 max-h-60 overflow-y-auto">
//               {categories.map((category, index) => (
//                 <li key={index} className="text-base hover:text-primary cursor-pointer">
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {filters.map((filter, index) => (
//             <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
//               <Accordion type="single" collapsible>
//                 <AccordionItem value={`filter-${index}`}>
//                   <AccordionTrigger className="text-lg font-medium hover:no-underline">
//                     {filter.title}
//                   </AccordionTrigger>
//                   <AccordionContent className="pt-2 space-y-3">
//                     {filter.options.map((option, optionIndex) => (
//                       <label key={optionIndex} className="flex items-center gap-3">
//                         <input
//                           type="checkbox"
//                           className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
//                         />
//                         <span className="text-base">{option}</span>
//                       </label>
//                     ))}
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           ))}
//         </aside>
//           </SheetContent>
//         </Sheet>

//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* Filters Sidebar */}
//         <aside className="lg:col-span-3 space-y-6 hidden md:block">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h2 className="text-lg font-medium mb-4">Categories</h2>
//             <ul className="space-y-3 max-h-60 overflow-y-auto">
//               {categories.map((category, index) => (
//                 <li key={index} className="text-base hover:text-primary cursor-pointer">
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {filters.map((filter, index) => (
//             <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
//               <Accordion type="single" collapsible>
//                 <AccordionItem value={`filter-${index}`}>
//                   <AccordionTrigger className="text-lg font-medium hover:no-underline">
//                     {filter.title}
//                   </AccordionTrigger>
//                   <AccordionContent className="pt-2 space-y-3">
//                     {filter.options.map((option, optionIndex) => (
//                       <label key={optionIndex} className="flex items-center gap-3">
//                         <input
//                           type="checkbox"
//                           className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
//                         />
//                         <span className="text-base">{option}</span>
//                       </label>
//                     ))}
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           ))}
//         </aside>

//         {/* Products Grid */}
//         <main className="lg:col-span-9">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.map((product) => (
//               <article key={product.id} className="group relative bg-white p-4 rounded-lg border border-gray-200">
//                 {/* Product Image */}
//                 <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-cover group-hover:opacity-90 transition-opacity"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                 </div>

//                 {/* Product Details */}
//                 <div className="mt-4 space-y-2">
//                   {product.badge && (
//                     <span className="block text-sm font-medium text-[#9E3500]">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h2 className="text-lg font-medium">{product.title}</h2>
//                   <p className="text-gray-600">{product.category}</p>
//                   <p className="text-gray-600">{product.colors} Colour</p>
//                   <p className="text-lg font-medium">MRP: ₹ {product.price}</p>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Related Tags */}
//           <section className="mt-16">
//             <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-1 text-sm border-2 border-gray-300 rounded-full
//                            bg-white shadow-sm hover:bg-gray-50 transition-colors"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   )
// }



// "use client"

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"



// import Image from "next/image";
// import comparePic from "@/app/images/compare.png"
// import { IoIosArrowDown } from "react-icons/io";
// import product_1 from "@/app/images/products/Rectangle.png"
// import product_2 from "@/app/images/products/Rectangle (1).png"
// import product_3 from "@/app/images/products/Rectangle (2).png"
// import product_4 from "@/app/images/products/Rectangle (3).png"
// import product_5 from "@/app/images/products/Rectangle (4).png"
// import product_6 from "@/app/images/products/Rectangle (5).png"
// import product_7 from "@/app/images/products/Rectangle (6).png"
// import product_8 from "@/app/images/products/Rectangle (7).png"
// import product_9 from "@/app/images/products/Rectangle (8).png"
// import product_10 from "@/app/images/products/Rectangle (9).png"
// import product_11 from "@/app/images/products/Rectangle (10).png"
// import product_12 from "@/app/images/products/Rectangle (11).png"
// import product_13 from "@/app/images/products/Rectangle (12).png"
// import product_14 from "@/app/images/products/Rectangle (13).png"
// import product_15 from "@/app/images/products/Rectangle (14).png"
// import product_16 from "@/app/images/products/Rectangle (15).png"
// import product_17 from "@/app/images/products/Rectangle (16).png"
// import product_18 from "@/app/images/products/Rectangle (17).png"
// import product_19 from "@/app/images/products/Rectangle (18).png"
// import product_20 from "@/app/images/products/Rectangle (19).png"
// import product_21 from "@/app/images/products/Rectangle (20).png"
// import product_22 from "@/app/images/products/Rectangle (21).png"
// import product_23 from "@/app/images/products/Rectangle (22).png"
// import product_24 from "@/app/images/products/Rectangle (23).png"
// import product_25 from "@/app/images/products/Rectangle (24).png"
// import product_26 from "@/app/images/products/Rectangle (25).png"
// import product_27 from "@/app/images/products/Rectangle.jpg"
// import product_28 from "@/app/images/products/Rectangle (26).png"
// import product_29 from "@/app/images/products/Rectangle (27).png"
// import product_30 from "@/app/images/products/Rectangle (28).png"





// export default function productsPage() {
//     return (
//         <div className="productsPage header_container">
//             <div className="flex justify-between">
//                 <div className="">
//                     <h2 className="text-[24px] font-Helvetica font-medium">New (500)</h2>
//                 </div>
//                 <div className="flex gap-6 mt-5">
//                     <div className="flex gap-2">
//                         <h2 className="text-[18px] font-Helvetica font-medium ">Hide Filters</h2>
//                         <Image src={comparePic} alt="comparePic" className="mt-1 w-[24px] h-[24px]" />
//                     </div>
//                     <div className="flex gap-1">
//                         <h2 className="text-[18px] font-Helvetica font-medium ">Sort By</h2>
//                         <IoIosArrowDown size={22} height={22} className="mt-1" />
//                     </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-12 gap-3">
//                 <div className="catagories col-span-2">
//                     <div className="w-auto max-h-[158px] overflow-y-scroll leading-[30px]  mb-3">
//                         <ul className="text-[16px] font-Helvetica font-medium">
//                             <li>Shoes</li>
//                             <li>Sports Bras</li>
//                             <li>Tops & T-Shirts</li>
//                             <li>Hoodies & Sweatshirts</li>
//                             <li>Jackets</li>
//                             <li>Trousers & Tights</li>
//                             <li>Shorts</li>
//                             <li>Tracksuits</li>
//                             <li>Jumpsuits & Rompers</li>
//                             <li>Skirts & Dresses</li>
//                             <li>Accessories & Equipment</li>
//                         </ul>
//                     </div>

//                     <div className="border-t-2 mt-[10px] border-[#CCCCCC] ">
//                         <Accordion type="single" collapsible>
//                             <AccordionItem value="item-1">
//                                 <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Gender</AccordionTrigger>
//                                 <AccordionContent>
//                                     <div className="leading-3">
//                                         <div className=" mb-2 text-[16px] font-Helvetica font-medium">
//                                             <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Men</span>
//                                         </div>
//                                         <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
//                                             <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Women</span>
//                                         </div>
//                                         <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
//                                             <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Unisex</span>
//                                         </div>
//                                     </div>
//                                 </AccordionContent>
//                             </AccordionItem>
//                         </Accordion>
//                     </div>
//                     <div className="border-t-2 mt-[10px] border-[#CCCCCC] ">
//                         <Accordion type="single" collapsible>
//                             <AccordionItem value="item-1">
//                                 <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Kids</AccordionTrigger>
//                                 <AccordionContent>
//                                     <div className="leading-3">
//                                         <div className=" mb-2 text-[16px] font-Helvetica font-medium">
//                                             <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span>Boys</span>
//                                         </div>
//                                         <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
//                                             <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span>Girls</span>
//                                         </div>
//                                     </div>
//                                 </AccordionContent>
//                             </AccordionItem>
//                         </Accordion>
//                     </div>
//                     <div className="border-t-2 mt-[10px] border-[#CCCCCC] ">
//                         <Accordion type="single" collapsible>
//                             <AccordionItem value="item-1">
//                                 <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Shop By Price</AccordionTrigger>
//                                 <AccordionContent>
//                                     <div className="leading-3">
//                                         <div className=" mb-2 text-[16px] font-Helvetica font-medium">
//                                             <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px] " /> <span className="mt-[-20px]">Under ₹ 2 500.00</span>
//                                         </div>
//                                         <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
//                                             <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span>₹ 2 501.00 - ₹ 7 500.00</span>
//                                         </div>
//                                     </div>
//                                 </AccordionContent>
//                             </AccordionItem>
//                         </Accordion>
//                     </div>

//                 </div>

//                 <div className="products col-span-10">
//                     <div className="grid grid-cols-3 gap-5 mb-8">
//                         <div className="products w-[320px] h-auto mx-auto">
//                             <Image src={product_1} alt="product_1" className="w-[320px] h-[320px]" />
//                             <div className="productDetails mt-2">
//                                 <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 Mid '07 </h3>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 10 795.00</span></h3>
//                             </div>
//                         </div>

// <div className="products w-[320px] h-auto mx-auto">
//     <Image src={product_2} alt="product_2" className="w-[320px] h-[320px]" />
//     <div className="productDetails  mt-2">
//         <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
//         <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Court Vision Low Next Nature </h3>
//         <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
//         <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
//         <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 4 995.00</span></h3>
//     </div>
// </div>

//                         <div className="products w-[320px] h-auto mx-auto">
//                             <Image src={product_3} alt="product_3" className="w-[320px] h-[320px]" />
//                             <div className="productDetails mt-2">
//                                 <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 PLT.AF.ORM </h3>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 8 695.00</span></h3>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-3 gap-5 mb-8">
//                         <div className="products w-[320px] h-auto mx-auto">
//                             <Image src={product_4} alt="product_4" className="w-[320px] h-[320px]" />
//                             <div className="productDetails mt-2">
//                                 <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 React</h3>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 13 295.00</span></h3>
//                             </div>
//                         </div>

//                         <div className="products w-[320px] h-auto mx-auto">
//                             <Image src={product_5} alt="product_5" className="w-[320px] h-[320px]" />
//                             <div className="productDetails  mt-2">
//                                 <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Promo Exclusion</p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Air Jordan 1 Elevate Low </h3>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 11 895.00</span></h3>
//                             </div>
//                         </div>

//                         <div className="products w-[320px] h-auto mx-auto">
//                             <Image src={product_6} alt="product_6" className="w-[320px] h-[320px]" />
//                             <div className="productDetails mt-2">
//                                 <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Standard Issue </h3>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Basketball Jersey</p>
//                                 <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
//                                 <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 2 895.00</span></h3>
//                             </div>
//                         </div>
//                     </div>



//                     <div className="relatedTags w-auto mt-[150px]">
//                         <h3 className="text-[22px] font-Helvetica font-medium">Related Categories</h3>
//                         <div className="tags w-auto ml-5 mt-7 mb-[80px]" >
//                             <ul className=" font-normal text-[12px] flex flex-wrap gap-2 font-Helvetica leading-[20px] text-center">
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Selling Products</li>
//                                 <li className="max-w-fit px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Basketball Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Football Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Men's Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Running Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Men's Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Jordan Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Women's Shoes</li>
//                                 <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Training & Gym</li>
//                             </ul>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </div>
//     )
// }






{/* <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_7} alt="product_7" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Promo Exclusion</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Dunk Low Retro SE </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 9 695.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_8} alt="product_8" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Sustainable Materials</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Dri-FIT UV Hyverse </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Short-Sleeve Graphic Fitness Top</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 2 495.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_9} alt="product_9" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Court Vision Low </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 5 695.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_10} alt="product_10" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Dri-FIT Ready </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Short-Sleeve Fitness Top</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">3 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 2 495.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_11} alt="product_11" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike One Leak Protection: Period </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">2 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 3 395.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_12} alt="product_12" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 LV8 3 </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Older Kids' Shoe</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 7 495.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_13} alt="product_13" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Blazer Low Platform </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 8 195.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_14} alt="product_14" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 '07 </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoe</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 8 195.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_15} alt="product_15" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Pro Dri-FIT </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Tight-Fit Sleeveless Top</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 1 495.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_16} alt="product_16" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Dunk Low Retro </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 8 695.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_17} alt="product_17" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Max SC </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">2 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 5 995.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_18} alt="product_18" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Dri-FIT UV Miler </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Short-Sleeve Running Top</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 1 695.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_19} alt="product_19" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Max SYSTM </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Older Kids' Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 6 495.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_20} alt="product_20" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Alate All U </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Light-Support Lightly Lined U-Neck Printed Sports Bra</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 2 195.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_21} alt="product_21" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Court Legacy Lift </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">2 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 7 495.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_22} alt="product_22" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]">Nike Swoosh</h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Medium-support Padded Sports Bra Tank</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">2 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 3 095.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_23} alt="product_23" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike SB Zoom Janoski OG+ </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 8 595.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_24} alt="product_24" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Dri-FIT Run Division Rise 365 </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Running Tank</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">2 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 3 495.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_25} alt="product_25" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Dri-FIT Challenger </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 2 495.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_26} alt="product_26" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Jordan Series ES </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">2 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 7 495.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_27} alt="product_27" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Outdoor Play </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Older Kids' Oversized Woven Jacket</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 3 895.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_28} alt="product_28" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Sportswear Trend </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Older Kids' (Girls') High-waisted Woven Shorts</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">2 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 2 495.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_29} alt="product_29" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]">Nike Blazer Low '77 Jumbo </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 8 595.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_30} alt="product_30" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                                <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike SB Force 58 </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Skate Shoe</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 5 995.00</span></h3>
                            </div>
                        </div>
                    </div> */}