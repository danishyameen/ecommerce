import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

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
            <div className="subFooter header_container flex justify-between mb-5">
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
        </footer>
    )
}