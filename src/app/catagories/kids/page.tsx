"use client"



import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

import { IoIosArrowDown } from "react-icons/io"
import product_12 from "@/app/images/products/Rectangle (11).png"
import product_19 from "@/app/images/products/Rectangle (18).png"
import product_23 from "@/app/images/products/Rectangle (22).png"
import product_27 from "@/app/images/products/Rectangle.jpg"
import product_28 from "@/app/images/products/Rectangle (26).png"
import product_30 from "@/app/images/products/Rectangle (28).png"
import comparePic from "@/app/images/compare.png"

const products = [
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
        id: 19,
        image: product_19,
        badge: "Just In",
        title: "Nike Air Max SYSTM",
        category: "Older Kids' Shoes",
        colors: 1,
        price: "₹ 6 495.00"
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
        id: 30,
        image: product_30,
        badge: "Just In",
        title: "Nike SB Force 58",
        category: "Skate Shoe",
        colors: 1,
        price: "₹5,995.00",
    }
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

export default function kidsProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="flex-1 w-auto">
                <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
                    Kid's Products
                </h1>
            </div>
            <header className="hidden  flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h1 className="text-2xl lg:text-3xl font-medium">New (500)</h1>
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Filters Sidebar */}
                <aside className="lg:col-span-3 space-y-6 hidden">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h2 className="text-lg font-medium mb-4">Categories</h2>
                        <ul className="space-y-3 max-h-60 overflow-y-auto">
                            {categories.map((category, index) => (
                                <li key={index} className="text-base hover:text-primary cursor-pointer">
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
                                            <label key={optionIndex} className="flex items-center gap-3">
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
            <main className="lg:col-span-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <article
                            key={product.id}
                            className="group relative bg-white p-4 rounded-lg border border-gray-200 
                                      hover:shadow-xl transition-shadow duration-300 ease-in-out
                                      animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Product Image with Hover Zoom */}
                            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Product Details with Hover Effects */}
                            <div className="mt-4 space-y-2">
                                {product.badge && (
                                    <span className="block text-sm font-medium text-[#9E3500] 
                                                     transform transition-all duration-300 
                                                     group-hover:translate-x-2">
                                        {product.badge}
                                    </span>
                                )}
                                <h2 className="text-lg font-medium group-hover:text-primary transition-colors">
                                    {product.title}
                                </h2>
                                <p className="text-gray-600">{product.category}</p>
                                <p className="text-gray-600">{product.colors} Colour</p>
                                <p className="text-lg font-medium">MRP: ₹ {product.price}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Related Tags with Hover Effects */}
                <section className="mt-16 animate-fade-in-up">
                    <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-1 text-sm border-2 border-gray-300 rounded-full
                                         bg-white shadow-sm hover:bg-gray-50 transition-all 
                                         duration-200 hover:scale-105 cursor-pointer"
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







