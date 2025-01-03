import Image from "next/image";
import featured from "@/app/images/featured.png"

export default function Featured() {
    return (
        <section className=" mt-[80px] mb-5">
            <div className="w-[100%] header_container">
                <div className="featured_content w-auto h-auto">
                    <h2 className="font-medium text-[25px] mb-5">Featured</h2>
                </div>

                <div className="w-auto h-auto mt-[0px]">
                    <Image src={featured} alt="heroImage" className="header_container sm:h-[700px] sm:w-[1200px] h-[400px] w-[500px]" />
                </div>

                <div className="text-content w-auto mt-[48px]">
                    
                    <h1 className="text-[54px] mb-5 font-medium text-center">STEP INTO WHAT FEELS GOOD</h1>
                    <p className="text-[18px] font-normal hero_text_container text-center leading-6">Cause everyone should know the feeling of running in that perfect pair.</p>

                    <div className="heroSectionButton text-center mt-[40px] flex gap-3 justify-center align-middle">
                        
                        <button className="px-[22px] py-[8px] bg-[#111111] text-white font-medium text-[18px] rounded-full text-center">Find Your Shoe</button>

                    </div>
                </div>
            </div>
        </section>
    )
}
