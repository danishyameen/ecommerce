"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



import Image from "next/image";
import comparePic from "@/app/images/compare.png"
import { IoIosArrowDown } from "react-icons/io";
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





export default function productsPage() {
    return (
        <div className="productsPage header_container">
            <div className="flex justify-between">
                <div className="">
                    <h2 className="text-[24px] font-Helvetica font-medium">New (500)</h2>
                </div>
                <div className="flex gap-6 mt-5">
                    <div className="flex gap-2">
                        <h2 className="text-[18px] font-Helvetica font-medium ">Hide Filters</h2>
                        <Image src={comparePic} alt="comparePic" className="mt-1 w-[24px] h-[24px]" />
                    </div>
                    <div className="flex gap-1">
                        <h2 className="text-[18px] font-Helvetica font-medium ">Sort By</h2>
                        <IoIosArrowDown size={22} height={22} className="mt-1" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-3">
                <div className="catagories col-span-2">
                    <div className="w-auto max-h-[158px] overflow-y-scroll leading-[30px]  mb-3">
                        <ul className="text-[16px] font-Helvetica font-medium">
                            <li>Shoes</li>
                            <li>Sports Bras</li>
                            <li>Tops & T-Shirts</li>
                            <li>Hoodies & Sweatshirts</li>
                            <li>Jackets</li>
                            <li>Trousers & Tights</li>
                            <li>Shorts</li>
                            <li>Tracksuits</li>
                            <li>Jumpsuits & Rompers</li>
                            <li>Skirts & Dresses</li>
                            <li>Accessories & Equipment</li>
                        </ul>
                    </div>

                    <div className="border-t-2 mt-[10px] border-[#CCCCCC] ">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Gender</AccordionTrigger>
                                <AccordionContent>
                                    <div className="leading-3">
                                        <div className=" mb-2 text-[16px] font-Helvetica font-medium">
                                            <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Men</span>
                                        </div>
                                        <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                            <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Women</span>
                                        </div>
                                        <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                            <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Unisex</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="border-t-2 mt-[10px] border-[#CCCCCC] ">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Kids</AccordionTrigger>
                                <AccordionContent>
                                    <div className="leading-3">
                                        <div className=" mb-2 text-[16px] font-Helvetica font-medium">
                                            <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span>Boys</span>
                                        </div>
                                        <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                            <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span>Girls</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="border-t-2 mt-[10px] border-[#CCCCCC] ">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Shop By Price</AccordionTrigger>
                                <AccordionContent>
                                    <div className="leading-3">
                                        <div className=" mb-2 text-[16px] font-Helvetica font-medium">
                                            <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px] " /> <span className="mt-[-20px]">Under ₹ 2 500.00</span>
                                        </div>
                                        <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                            <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span>₹ 2 501.00 - ₹ 7 500.00</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    
                </div>

                <div className="products col-span-10">
                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_1} alt="product_1" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                               <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 Mid '07 </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 10 795.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_2} alt="product_2" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                               <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Court Vision Low Next Nature </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 4 995.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_3} alt="product_3" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                               <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 PLT.AF.ORM </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 8 695.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_4} alt="product_4" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                               <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Air Force 1 React</h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Men's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 13 295.00</span></h3>
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_5} alt="product_5" className="w-[320px] h-[320px]" />
                            <div className="productDetails  mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Promo Exclusion</p>
                               <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Air Jordan 1 Elevate Low </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Shoes</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 11 895.00</span></h3> 
                            </div>
                        </div>

                        <div className="products w-[320px] h-auto mx-auto">
                            <Image src={product_6} alt="product_6" className="w-[320px] h-[320px]" />
                            <div className="productDetails mt-2">
                                <p className="text-[16px] font-Helvetica font-medium text-[#9E3500]">Just In</p>
                               <h3 className="text-[16px] font-Helvetica font-medium text-[#111111]"> Nike Standard Issue </h3>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px]">Women's Basketball Jersey</p>
                                <p className="text-[#757575] font-Helvetica font-normal text-[16px] mb-5">1 <span>Colour</span></p>
                                <h3 className="text-[16px] font-Helvetica font-medium">MRP : <span>₹ 2 895.00</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-8">
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
                    </div>

                    <div className="relatedTags w-auto mt-[150px]">
                        <h3 className="text-[22px] font-Helvetica font-medium">Related Categories</h3>
                        <div className="tags w-auto ml-5 mt-7 mb-[80px]" >
                            <ul className=" font-normal text-[12px] flex flex-wrap gap-2 font-Helvetica leading-[20px] text-center">
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Selling Products</li>
                                <li className="max-w-fit px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Basketball Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Football Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Men's Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Running Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Men's Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">New Jordan Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Women's Shoes</li>
                                <li className="max-w-fit  px-4 py-1 border-2 border-[#CCCCCC] border-solid  rounded-full shadow-[inset 1px 1px 1px 1px #CCCCCC];">Best Training & Gym</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}