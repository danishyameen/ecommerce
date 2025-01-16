import Image from "next/image";
import Link from "next/link";
import heart from "@/app/images/heart.png";
import cartProductPic1 from "@/app/images/gearMenProducts1.png"
import menShoesProductPic1 from "@/app/images/product1.png"

import { FiShoppingCart } from "react-icons/fi";
import { Heart, Trash2 } from "lucide-react";


export default function cartPage() {
    return (
        <div className="cartPage header_container ">
            <div className="cartPageSection grid grid-cols-12 gap-8 mt-10 mb-[200px] w-[1100px] mx-auto">
                <div className="col-span-7">
                    <div className="w-auto h-auto bg-[#F7F7F7] p-5 mb-3">
                        <p className=" font-Inter font-medium text-[14px] text-[#111111]">Free Delivery</p>
                        <p className="font-Inter font-normal text-[12px] text-[#111111] ">Applies to orders of ₹ 14 000.00 or more. <span className="font-semibold underline ml-8"><Link href="/"> View details</Link></span></p>
                    </div>
                    <div className="mb-4 w-auto h-auto">
                        <h2 className="text-[22px] text-[#111111] font-medium">Bag</h2>
                    </div>

                    <div className="addCartPage w-auto h-auto flex gap-5 mb-5">
                        <div className="cartProductPic">
                            <Image src={cartProductPic1} alt="cartProductPic1" width={150} height={150} />
                        </div>
                        <div className="w-full h-auto">
                            <div className="w-auto h-auto">
                                <div className="flex justify-between">
                                    <h2 className="font-Inter font-medium mb-2 text-[15px] text-[#111111]">Nike Dri-FIT ADV TechKnit Ultra</h2>
                                    <h2 className="font-Inter font-medium mb-2 text-[15px] text-[#111111]">MRP: ₹ 3 895.00</h2>
                                </div>
                                <p className="font-Inter font-medium mb-1 text-[15px] text-[#757575] ">Men's Short-Sleeve Running Top</p>
                                <p className="font-Inter font-medium mb-1 text-[15px] text-[#757575] ">Ashen Slate/Cobalt Bliss</p>
                                <div className="flex gap-5 mb-4">
                                    <p className="font-Inter font-medium text-[15px] text-[#757575">Size <span>L</span></p>
                                    <p className="font-Inter font-medium text-[15px] text-[#757575">Quantity <span>1</span></p>
                                </div>
                                <div className="flex gap-5">
                                    <Link href="/"><Heart size={24} color="#111111" /></Link>
                                    <Link href="/"><Trash2 size={24} color="#111111" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full h-auto bg-[#757575] mt-[15px] mb-[15px]" />
                    <div className="addCartPage w-auto  h-auto flex gap-5 mb-5">
                        <div className="cartProductPic">
                            <Image src={menShoesProductPic1} alt="menShoesProductPic1" width={150} height={150} />
                        </div>
                        <div className="w-full h-auto">
                            <div className="w-auto h-auto">
                                <div className=" flex justify-between">
                                    <h2 className="font-Inter font-medium mb-2 text-[15px] text-[#111111]">Nike Air Max 97 SE</h2>
                                    <h2 className="font-Inter font-medium mb-2 text-[15px] text-[#111111]">MRP: ₹ 16 995.00</h2>
                                </div>
                                <p className="font-Inter font-medium mb-1 text-[15px] text-[#757575] ">Men's Shoes</p>
                                <p className="font-Inter font-medium mb-1 text-[15px] text-[#757575] ">Flat Pewter/Light Bone/Black/White</p>
                                <div className="flex gap-5 mb-4">
                                    <p className="font-Inter font-medium text-[15px] text-[#757575]">Size <span>8</span></p>
                                    <p className="font-Inter font-medium text-[15px] text-[#757575]">Quantity <span>1</span></p>
                                </div>
                                <div className="flex gap-5">
                                    <Link href="/"><Heart size={24} color="#111111" /></Link>
                                    <Link href="/"><Trash2 size={24} color="#111111" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-5 w-full mt-[-15px]">
                    <div className="w-auto h-auto p-5 mb-3">
                        <h2 className="text-[22px] text-[#111111] font-medium mb-5">Summary</h2>
                        <div className="flex justify-between font-normal text[14px]">
                            <p>Subtotal</p>
                            <p>₹ 20 890.00</p>
                        </div>

                        <div className="flex justify-between font-normal text[14px] leading-[50px]">
                            <p>Estimated Delivery & Handling</p>
                            <p className="">Free</p>
                        </div>

                        <div className="flex justify-between font-normal mt-[30px] text[14px] leading-[50px]">
                            <p>Total</p>
                            <p className="">₹ 20 890.00</p>
                        </div>

                        <div className="w-auto h-auto mx-auto text-center mt-[50px]">
                            <button className="w-[300px] h-[50px] rounded-full text-[15px] text-[#ffffff] bg-[#111111] font-medium font-Inter">Member Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
