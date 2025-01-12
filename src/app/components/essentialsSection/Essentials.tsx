import Image from "next/image";
import EssentialsPic1 from "@/app/images/EssentialsPic1.png"
import EssentialsPic2 from "@/app/images/EssentialsPic2.png"
import EssentialsPic3 from "@/app/images/EssentialsPic3.png"

export default function EssentialsSection() {
    return (
        <section className="jordanBrand header_container">
            <div className="gearProducts_content w-auto h-auto">
                <h2 className="font-medium text-[25px] mb-5">The Essentials</h2>
            </div>
            <div className="flex mt-5  relative gap-2">
                <div className="w-auto h-auto">
                    <div className="w-auto h-auto object-cover relative">
                        <Image src={EssentialsPic1} className="relative" alt="EssentialsPic1" />
                    </div>
                    <div className="heroSectionButton absolute bottom-[50px] ml-[40px] text-center mt-[20px]">
                        <button className="px-[18px] py-[5px] bg-[#ffffff] text-[#111111] font-medium text-[15px] rounded-full">Men's</button>
                    </div>
                </div>

                <div>
                    <div className="w-auto h-auto object-cover relative ">
                        <Image src={EssentialsPic2} className="relative" alt="EssentialsPic2" />
                    </div>
                    <div className="heroSectionButton absolute  bottom-[50px] ml-[40px]  text-center mt-[20px]">
                        <button className="px-[18px] py-[5px] bg-[#ffffff] text-[#111111] font-medium text-[15px] rounded-full">Women's</button>
                    </div>
                </div>

                <div>
                    <div className="w-auto h-auto object-cover relative">
                        <Image src={EssentialsPic3} className="relative" alt="EssentialsPic3" />
                    </div>
                    <div className="heroSectionButton absolute bottom-[50px] ml-[40px] text-center mt-[20px] ">
                        <button className="px-[18px] py-[5px] bg-[#ffffff]  text-[#111111] font-medium text-[15px] rounded-full">Kids</button>
                    </div>
                </div>
            </div>
        </section>
    )
}