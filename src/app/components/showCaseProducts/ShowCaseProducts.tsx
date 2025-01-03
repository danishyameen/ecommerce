import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import ShowCaseProductsImg1 from "@/app/images/product1.png"
import ShowCaseProductsImg2 from "@/app/images/product2.png"
import ShowCaseProductsImg3 from "@/app/images/product3.png"

export default function ShowCaseProducts() {
    return (
        <section className="w-full mt-[100px]">
            <div className="text_heading flex justify-between header_container">
                <h3 className=" font-medium text-[25px]">Best of Air Max</h3>
                <div className="slide_option w-auto h-[48px] flex gap-4">
                    <p className=" font-medium text[18px]">Shop</p>

                    <div className="mt-[-3px] w-[30px] h-[30px] p-[5px]  bg-[#E5E5E5] rounded-full">
                        <FaAngleLeft size="20px" color="black" />
                    </div>
                    <div className="mt-[-3px]  w-[30px] h-[30px] p-[5px]  bg-[#E5E5E5] rounded-full">
                        <FaAngleRight size="20px" color="black" />
                    </div>
                </div>
            </div>

            <div className="slider_section w-full">
                <Carousel className="header_container " opts={{ align: "start" }}>
                    <CarouselContent>
                        <CarouselItem className="basis-1/3">
                            <Image src={ShowCaseProductsImg1} alt="ShowCaseProductsImg" />
                            <div className="w-auto flex justify-between mt-5">
                                <div className="w-[130px] ">
                                    <h3 className=" font-medium text-[15px] ">Nike Air Max Pulse</h3>
                                    <p className="text-[#757575] font-normal text-[15px]">Women's Shoes</p>
                                </div>
                                <div className="price">
                                    <p className="text-[15px] font-medium">₹ 13 995</p>
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem className="basis-1/3">
                            <Image src={ShowCaseProductsImg2} alt="ShowCaseProductsImg" />
                            <div className="w-auto flex justify-between mt-5">
                                <div className="w-[130px] ">
                                    <h3 className=" font-medium text-[15px] ">Nike Air Max Pulse</h3>
                                    <p className="text-[#757575] font-normal text-[15px]">Men's Shoes</p>
                                </div>
                                <div className="price">
                                    <p className="text-[15px] font-medium">₹ 13 995</p>
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem className="basis-1/3">
                            <Image src={ShowCaseProductsImg3} alt="ShowCaseProductsImg" />
                            <div className="w-auto flex justify-between mt-5">
                                <div className="w-[130px] ">
                                    <h3 className=" font-medium text-[15px] ">Nike Air Max Pulse</h3>
                                    <p className="text-[#757575] font-normal text-[15px]">Men's Shoes</p>
                                </div>
                                <div className="price">
                                    <p className="text-[15px] font-medium">₹ 13 995</p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    {/* <CarouselPrevious /> */}
                </Carousel>


            </div>
        </section>
    )
}

