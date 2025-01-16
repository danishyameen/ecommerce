import Image from "next/image";
import comparePic from "@/app/images/compare.png"
import { IoIosArrowDown } from "react-icons/io";
export default function productsPage() {
    return (
        <div className="productsPage header_container">
            <div className="flex justify-between">
                <div className="">
                    <h2 className="text-[24px] font-Helvetica font-medium">New (500)</h2>
                </div>
                <div className="flex gap-6 mt-2">
                    <div className="flex gap-2">
                        <h2 className="text-[18px] font-Helvetica font-medium ">Hide Filters</h2>
                        <Image src={comparePic} alt="comparePic" className="mt-1 w-[24px] h-[24px]" />
                    </div>
                    <div className="flex gap-1">
                        <h2 className="text-[18px] font-Helvetica font-medium ">Sort By</h2>
                        <IoIosArrowDown size={22} height={22} className="mt-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}