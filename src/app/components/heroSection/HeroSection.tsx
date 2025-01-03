import Image from "next/image";
import heroImage from "@/app/images/heroImage.png"

export default function HeroSection(){
    return(
        <section>
            <div className="heroSection mt-[0px] w-[100%]">
                <div className="heroSectionText text-center bg-[#F5F5F5] w-[100%] p-3">
                    <h2 className=" font-medium text-[18px]">Hello Nike App</h2>
                    <p className="text-[15px]">Download the app to access everything Nike. Get Your Great</p>
                </div>
                <div className=" w-auto h-auto heroImage mt-[0px] p-2">
                    <Image src={heroImage} alt="heroImage" className="header_container sm:h-[700px] sm:w-[1200px] h-[400px] w-[500px]"/>
                </div>

                <div className="text-content w-auto mt-[25px]">
                    <p className="text-[18px] font-medium text-center">First Look</p>
                    <h1 className="text-[56px] font-medium text-center">Nike Air Max Pulse</h1>
                    <p className="text-[18px] font-normal hero_text_container text-center leading-6">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                    —designed to push you past your limits and help you go to the max.</p>
                    
                    <div className="heroSectionButton text-center mt-[40px] flex gap-3 justify-center align-middle">
                    <button className="px-[22px] py-[8px] bg-[#111111] text-white font-medium text-[18px] rounded-full text-center">Notify Me</button>
                    <button className="px-[22px] py-[8px] bg-[#111111] text-white font-medium text-[18px] rounded-full text-center">Shop Air Max</button>

                    </div>
                </div>
            </div>
        </section>
    )
}