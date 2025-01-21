import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image"
import payImg1 from "@/app/images/payImg1.png"
import payImg2 from "@/app/images/payImg2.png"
import payImg3 from "@/app/images/Image (4).png"
import payImg4 from "@/app/images/Image-1.png"
import payImg5 from "@/app/images/Image-2.png"
import payImg6 from "@/app/images/Image-3.png"
import payImg7 from "@/app/images/Image-4.png"
import payImg8 from "@/app/images/Image-5.png"
import payImg9 from "@/app/images/Image-6.png"
import payImg10 from "@/app/images/Image-7.png"
import payImg11 from "@/app/images/Image-8.png"


export default function Footer() {
    return (
        <footer className="bg-[#111111] pb-[20px] w-[100%] h-auto">
            <div className="py-[40px] header_container">
                <div className="mainFooter flex">
                    <div className="w-[80%] h-auto flex gap-5 mx-auto">
                        <div className="w-[240px] text-[#ffffff] font-normal mt-[-5px] text-[14px] leading-[40px]">
                            <h3>Find A Store</h3>
                            <h3>Become A Member</h3>
                            <h3>Sign Up for Email</h3>
                            <h3>Send Us Feedback</h3>
                            <h3>Student Discounts</h3>

                        </div>

                        <div className="w-[240px]">
                            <h3 className="text-[#ffffff] font-normal text-[14px] mb-3">Get Help</h3>
                            <ul className="text-[#7E7E7E] text-[14px] leading-[40px]">
                                <li>Order Status</li>
                                <li>Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us On Nike.com Inquiries</li>
                                <li>Contact Us On All Other Inquiries</li>
                            </ul>
                        </div>

                        <div className="w-[240px]">
                            <h3 className="text-[#ffffff] font-normal text-[14px]  mb-3">About Nike</h3>
                            <ul className="text-[#7E7E7E] text-[14px] leading-[40px]">
                                <li>News</li>
                                <li>Careers</li>
                                <li>Investors</li>
                                <li>Sustainability</li>
                            </ul>
                        </div>
                    </div>

                    <div className="social_icons flex gap-3 text-end">
                        <FaTwitter className="bg-[#7E7E7E] w-[30px] h-[30px] p-2 rounded-full" />
                        <FaFacebookF className="bg-[#7E7E7E] w-[30px] h-[30px] p-2 rounded-full" />
                        <TfiYoutube className="bg-[#7E7E7E] w-[30px] h-[30px] p-2 rounded-full" />
                        <TiSocialInstagram className="bg-[#7E7E7E] w-[30px] h-[30px] p-2 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="subFooter header_container border-t-2 border-solid pt-3 border-[#757575] flex justify-between pb-[20px]">
                <div className="locationText flex gap-5 w-[350px]">
                    <div className="flex gap-2 w-[60px]">
                        <FaLocationDot className="text-[#ffffff] w-[18px] h-[18px]" />
                        <h3 className="text-[#ffffff] text-[15px] font-normal ">India</h3>
                    </div>
                    <p className="font-normal text-[15px] w-[250px] text-[#7E7E7E]">© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="footerText flex gap-5 w-auto ">
                    <p className="text-[#7E7E7E] text-[15px] font-normal">Guides</p>
                    <p className="text-[#7E7E7E] text-[15px] font-normal">Terms of Sale</p>
                    <p className="text-[#7E7E7E] text-[15px] font-normal">Terms of Use</p>
                    <p className="text-[#7E7E7E] text-[15px] font-normal">Nike Privacy Policy</p>
                </div>    
            </div>
            <div className="subFooter header_container flex justify-evenly mb-5">
                    <Image src={payImg1} alt="payImg1" />
                    <Image src={payImg2} alt="payImg2" />
                    <Image src={payImg3} alt="payImg3" />
                    <Image src={payImg4} alt="payImg4" />
                    <Image src={payImg5} alt="payImg5" />
                    <Image src={payImg6} alt="payImg6" />
                    <Image src={payImg7} alt="payImg7" />
                    <Image src={payImg8} alt="payImg8" />
                    <Image src={payImg9} alt="payImg9" />
                    <Image src={payImg10} alt="payImg10" />
                    <Image src={payImg11} alt="payImg11" />
                </div>
        </footer>
    )
}