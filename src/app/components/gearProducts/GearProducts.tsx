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

import gearMenProducts1 from "@/app/images/gearMenProducts1.png"
import gearMenProducts2 from "@/app/images/gearMenProducts2.png"
import gearWomenProducts1 from "@/app/images/gearWomenProducts1.png"
import gearWomenProducts2 from "@/app/images/gearWomenProducts2.png"


export default function GearProducts() {
    return (
        <section>
            <div className="gearProducts header_container">
                <div className="gearProducts_content w-auto h-auto">
                    <h2 className="font-medium text-[25px] mb-5">Gear Up</h2>
                </div>

                <div className="products_slider h-auto flex gap-4  header_container">
                    <div className="mens_slider w-[600px]  px-1 h-[509px]">
                        <div className="w-[600px] h-[48px] flex text-right  justify-end">
                            <div className="slide_option w-auto h-[48px] flex items-center">
                                <p className=" font-medium text[18px] mr-[80px]">Shop Men's</p>

                                <div className="mt-[0px] w-[28px] hidden h-[28px] p-[4px] bg-[#E3E3E5] rounded-full">
                                    <FaAngleLeft size="18px" color="black" />
                                </div>
                                <div className="mt-[1px]  w-[28px] hidden  h-[28px] p-[4px]  bg-[#E5E5E5] rounded-full">
                                    <FaAngleRight size="18px" color="black" />
                                </div>
                            </div>
                        </div>

                        <Carousel className="w-[100%] mx-auto" opts={{ align: "start" }}>
                            <CarouselContent>
                                <CarouselItem className="basis-1/2 w-[100%]">
                                    <Image src={gearMenProducts1} alt="gearMenProducts1" />
                                    <div className="w-auto flex justify-between mt-5">
                                        <div className="w-[231.50px] ">
                                            <h3 className=" font-medium text-[15px] ">Nike Dri-FIT ADV TechKnit Ultra</h3>
                                            <p className="text-[#757575] w-[150px] font-normal text-[15px]">Men's Short-Sleeve Running Top</p>
                                        </div>
                                        <div className="price">
                                            <p className="text-[15px] font-medium">₹ 3 895</p>
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="basis-1/2">
                                    <Image src={gearMenProducts2} alt="gearMenProducts2" />
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

                                <CarouselItem className="basis-1/2 w-[100%]">
                                    <Image src={gearMenProducts1} alt="gearMenProducts1" />
                                    <div className="w-auto flex justify-between mt-5">
                                        <div className="w-[180px] ">
                                            <h3 className=" font-medium text-[15px] ">Nike Dri-FIT Challenger</h3>
                                            <p className="text-[#757575] font-normal text-[15px]">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                                        </div>
                                        <div className="price">
                                            <p className="text-[15px] font-medium">₹ 13 995</p>
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="basis-1/2">
                                    <Image src={gearMenProducts2} alt="gearMenProducts2" />
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
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    <div className="mens_slider w-[600px]  px-1 h-[509px]">
                        <div className="w-[600px] h-[48px] flex text-right  justify-end">
                            <div className="slide_option w-auto h-[48px] flex items-center">
                                <p className=" font-medium text[18px] mr-[80px]">Shop Women's</p>

                                <div className="mt-[0px] hidden w-[28px] h-[28px] p-[4px]  bg-[#E5E5E5] rounded-full">
                                    <FaAngleLeft size="20px" color="black" />
                                </div>
                                <div className="mt-[-3px] hidden w-[30px] h-[30px] p-[5px]  bg-[#E5E5E5] rounded-full">
                                    <FaAngleRight size="20px" color="black" />
                                </div>
                            </div>
                        </div>

                        <Carousel className="w-[100%] mx-auto" opts={{ align: "start" }}>
                            <CarouselContent>
                                <CarouselItem className="basis-1/2 w-[100%]">
                                    <Image src={gearWomenProducts1} alt="gearWomenProducts1" />
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

                                <CarouselItem className="basis-1/2">
                                    <Image src={gearWomenProducts2} alt="gearWomenProducts2" />
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

                                <CarouselItem className="basis-1/2 w-[100%]">
                                    <Image src={gearWomenProducts1} alt="gearWomenProducts1" />
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

                                <CarouselItem className="basis-1/2">
                                    <Image src={gearWomenProducts2} alt="gearWomenProducts2" />
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
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>


                </div>
            </div>
        </section>
    )
}



