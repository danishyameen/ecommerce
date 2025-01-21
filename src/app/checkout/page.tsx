"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


import Link from "next/link"
import Image from "next/image"
import gearMenProducts1 from "@/app/images/gearMenProducts1.png"
import menShoeProducts from "@/app/images/product3.png"

import box from "@/app/images/box.png"
import { MessageSquareText } from "lucide-react"
import { IoBagOutline } from "react-icons/io5";

export default function checkOutPage() {
    return (
        <div className="checkOutPage header_container  pb-[50px]">
            <div className="flex gap-5 justify-end mt-5">
                <p className="text-[15px] font-Inter font-normal mt-[-1px]">000 800 100 9538</p>
                <MessageSquareText size={20} height={20} color="#000000" />
                <IoBagOutline size={20} height={20} color="#000000" className="mt-[-1px]" />
            </div>
            <div className="w-[1000px] mx-auto mt-[50px]">
                <div className="grid grid-cols-2 gap-20">
                    <div className="w-auto h-auto ">
                        <p className="text-[21px] font-Inter font-medium mb-3">How would you like to get your order?</p>
                        <p className="text-[15px] font-Inter font-normal mb-8 text-[#757575]">Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <Link href="/" className=" underline"> Learn More </Link></p>
                        <div className="mb-5">
                            <input type="text" placeholder="Deliver It" readOnly className="placeholder-black border-2 border-solid border-[#111111] outline-none relative w-[440px] box-border h-[82px] rounded-2xl pl-[80px]" />
                            <Image src={box} alt="box" width={24} height={24} className=" absolute bottom-[135px] left-[210px] bg-[#ffffff] " />
                        </div>

                        <div className="form">
                            <p className="text-[21px] font-Inter font-medium mb-3">Enter your name and address:</p>
                            <form action="">
                                <input type="text" placeholder="First Name" className="w-[440px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                <br />
                                <input type="text" placeholder="Last Name" className="w-[440px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                <br />
                                <input type="text" placeholder="Address Line 1" className="w-[440px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-1" />
                                <p className="text-[#757575] text-[11px] font-Inter font-normal ml-2">We do not ship to P.O. boxes</p>
                                <br />
                                <input type="text" placeholder="Address Line 2" className="w-[440px] placeholder-black mt-[-10px] box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                <br />
                                <input type="text" placeholder="Address Line 3" className="w-[440px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                <br />
                                <div className="flex gap-3">
                                    <input type="text" placeholder="Postal Code" className="w-[215px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow	filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                    <input type="text" placeholder="Locality" className="w-[215px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                </div>

                                <div className="flex gap-3">
                                    <select name="" id="" className="w-[215px] box-border  h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" >
                                        <option value="" className="">State/Territory</option>
                                    </select>
                                    <input type="text" placeholder="India" className="w-[215px] box-border placeholder-black h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                </div>

                                <div className="flex gap-4 mb-5">
                                    <input type="checkbox" className="border-[#CCCCCC] rounded-md border-2 border-solid outline-none w-[17px] h-[17px]" />
                                    <p className="text-[15px] mt-[-2px] font-Inter font-normal">Save this address to my profile</p>
                                </div>
                                <div className="flex gap-4 mb-5">
                                    <input type="checkbox" className="border-[#CCCCCC] rounded-md bg-[#757575] border-2 border-solid outline-none w-[17px] h-[17px]" />
                                    <p className="text-[15px] mt-[-2px] font-Inter font-normal">Make this my preferred address</p>
                                </div>
                                <div className=" mb-5">
                                    <h3 className="text-[21px] font-Inter font-medium mb-3">What's your contact information?</h3>
                                    <input type="text" placeholder="Email" className="w-[440px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                    <p className="text-[14px] ml-3  mt-[-8px] font-Inter font-normal text-[#757575]">A confirmation email will be sent after checkout.</p>
                                    <br />
                                    <input type="text" placeholder="Phone Number" className="w-[440px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                    <p className="text-[14px] ml-3  mt-[-8px] font-Inter font-normal text-[#757575]">A carrier might contact you to confirm delivery.</p>
                                </div>

                                <div className=" mb-4">
                                    <h3 className="text-[21px] font-Inter font-medium mb-3">What's your PAN?</h3>
                                    <input type="text" placeholder="PAN" className="w-[440px] placeholder-black box-border h-[55px] pl-[15px] drop-shadow filter:drop-shadow(0 0 0 0 #ffffff) rounded outline-none border-2 border-solid border-[#CCCCCC] mb-3" />
                                    <p className="text-[14px] ml-3  mt-[-8px] font-Inter font-normal text-[#757575]">Enter your PAN to enable payment with UPI, Net Banking or <br /> local card methods</p>
                                </div>

                                <div className="flex gap-4 mb-5">
                                    <input type="checkbox" className="border-[#CCCCCC] rounded-md border-2 border-solid outline-none w-[17px] h-[17px]" />
                                    <p className="text-[15px] mt-[-2px] text-[#757575] font-Inter font-normal">Save PAN details to Nike Profile</p>
                                </div>

                                <div className="flex gap-4 mb-[50px] w-auto">
                                    <input type="checkbox" className="border-[#CCCCCC] rounded-md border-2 border-solid outline-none w-[17px] h-[17px]" />
                                    <p className="text-[15px] w-[380px] mt-[-2px] text-[#757575] font-Inter font-normal">I have read and consent to eShopWorld processing my information in accordance with the <Link href="/" className="underline"> Privacy Statement </Link> and <Link href="/" className="underline"> Cookie Policy</Link>. eShopWorld is a trusted Nike partner.</p>
                                </div>
                                <div className="w-[350px] h-[60px] mx-auto mb-5">
                                    <button className="w-full text-center h-[60px] py-[16px]  rounded-full text-[#757575] bg-[#F5F5F5]">Continue</button>
                                </div>
                            </form>

                            <div className="border-t-2 mt-[10px] border-[#CCCCCC] mb-4 max-w-[440px] ">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Delivery</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="leading-3">
                                                <div className=" mb-2 text-[16px] font-Helvetica font-medium">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Men</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Women</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Unisex</span> */}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="border-t-2 mt-[10px] border-[#CCCCCC] mb-4 max-w-[440px]">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Shipping</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="leading-3">
                                                <div className=" mb-2 text-[16px] font-Helvetica font-medium">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Men</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Women</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Unisex</span> */}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="border-t-2 mt-[10px] border-[#CCCCCC] mb-4 max-w-[440px]">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Billing</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="leading-3">
                                                <div className=" mb-2 text-[16px] font-Helvetica font-medium">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Men</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Women</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Unisex</span> */}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="border-t-2 mt-[10px] border-[#CCCCCC] mb-4 max-w-[440px]">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-[16px] font-Helvetica font-medium">Payment</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="leading-3">
                                                <div className=" mb-2 text-[16px] font-Helvetica font-medium">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Men</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Women</span> */}
                                                </div>
                                                <div className="mb-2 text-[16px] font-Helvetica font-medium leading-3 block">
                                                    {/* <input type="checkbox" className="border-2 border-solid border-[#CCCCCC] mr-3 w-[20px] h-[20px]" /> <span className="mt-[-10px]">Unisex</span> */}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    <div className="w-[400px] ">
                        <p className="text-[21px] font-Helvetica font-medium mb-3">Order Summary</p>
                        <div className="flex justify-between text-[#8D8D8D] text-[15px] font-Inter font-normal mb-2">
                            <p>Subtotal</p>
                            <p>₹ 20 890.00</p>
                        </div>
                        <div className="flex justify-between text-[#8D8D8D] text-[15px] font-Inter font-normal">
                            <p>Delivery/Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr className=" w-auto bg-[#8D8D8D] mt-[20px] mb-[20px]" />
                        <div className="flex justify-between text-[#111111] text-[15px] font-Inter font-medium">
                            <p>Total</p>
                            <p>₹ 20 890.00</p>
                        </div>
                        <hr className=" w-auto bg-[#8D8D8D] mt-[20px] mb-[20px]" />
                        <p className="text-[9px] font-Inter font-normal mb-5">(The total reflects the price of your order, including all duties and taxes)</p>

                        <h3 className="text-[15px] font-Inter font-semibold"> Arrives Mon, 27 Mar - Wed, 12 Apr </h3>
                        <div className="flex gap-3 mt-5">
                            <Image src={gearMenProducts1} alt="gearMenProducts1" className=" w-[200px] h-[200px] " />
                            <div>
                                <h4 className="text-[18px] mb-4 font-Inter font-normal">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h4>
                                <p className="text-[16px] font-Inter font-normal text-[#8D8D8D]">Qty 1</p>
                                <p className="text-[16px] font-Inter font-normal text-[#8D8D8D]">Size <span>L</span></p>
                                <p className="text-[16px] font-Inter font-normal text-[#8D8D8D]">₹ 3 895.00</p>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-5">
                            <Image src={menShoeProducts} alt="menShoeProducts" className=" w-[200px] h-[200px] " />
                            <div>
                                <h4 className="text-[18px] mb-14 font-Inter font-normal">Nike Air Max 97 SE Men's Shoes</h4>
                                <p className="text-[16px] font-Inter font-normal text-[#8D8D8D]">Qty 1</p>
                                <p className="text-[16px] font-Inter font-normal text-[#8D8D8D]">Size <span>UK 8L</span></p>
                                <p className="text-[16px] font-Inter font-normal text-[#8D8D8D]">₹ 16 995.00</p>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}