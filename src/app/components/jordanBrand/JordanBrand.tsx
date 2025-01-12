import Image from "next/image";
import JordanBrandPic1 from "@/app/images/jordanBrandPic1.png";
import JordanBrandPic2 from "@/app/images/jordanBrandPic2.png";

export default function JordanBrand() {
    return (
        <>
            <section className="jordanBrand header_container">
                <div className="gearProducts_content w-auto h-auto">
                    <h2 className="font-medium text-[25px] mb-5">Don't Miss</h2>
                </div>
                <div className="flex mt-5 object-cover">
                    <div className="w-auto h-auto">
                        <Image src={JordanBrandPic1} alt="JordanBrandPic1" />
                    </div>
                    <div className="w-auto h-auto object-cover">
                        <Image src={JordanBrandPic2} alt="JordanBrandPic2" />
                    </div>
                </div>
                <div className="text-center align-middle">
                    <h1 className="font-medium text-[52px] mt-3 mb-5">FLIGHT ESSENTIALS</h1>
                    <p className="text-[15px] font-normal">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                </div>
                <div className="heroSectionButton text-center mt-[20px] flex gap-3 justify-center align-middle">
                    <button className="px-[22px] py-[8px] bg-[#111111] text-white font-medium text-[18px] rounded-full text-center">Shop</button>
                </div>
                
            </section>
        </>
    )
}