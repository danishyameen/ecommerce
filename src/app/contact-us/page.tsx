// import Search from "../components/header/search_box/Search"
import SearchInput from "@/app/components/searchBar/SearchInput"
import thumb1 from "@/app/images/thumb1.svg"
import thumb2 from "@/app/images/thumb2.svg"
import Link from "next/link";
import Image from "next/image";
import Phone from "@/app/images/Image.png"
import textMsg from "@/app/images/Image (1).png"
import envolop from "@/app/images/Image (2).png"
import location from "@/app/images/Image (3).png"
export default function ContactPage() {
    return (
        <div className="contactPage header_container">
            <div className="w-auto h-auto">
                <h1 className=" font-Helvetica text-center font-normal text-[32px] mt-10 mb-5">GET HELP</h1>
                <div className="w-[100%] mx-auto text-center  mb-10">
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vitae similique aspernatur ullam, maiores magnam suscipit ipsum quae officiis minus amet obcaecati distinctio id eos assumenda doloremque quos fugiat aliquid.</p> */}
                    <SearchInput/>
                </div>
            </div>

            <div className="grid grid-cols-12 mb-5">
                <div className="col-span-9">
                    <h2 className="text-[28px] font-Helvetica mb-5 font-medium">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                    <p className="text-[16px] font-Helvetica mb-5 font-normal">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                    <ul className="ml-5 leading-7 mb-4">
                        <li className="text-[16px] font-Helvetica font-normal">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                        <li className="text-[16px] font-Helvetica font-normal">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</li>
                        <li className="text-[16px] font-Helvetica font-normal">Apple Pay</li>
                    </ul>
                    <p className="text-[16px] font-Helvetica font-normal"><span className=""><Link href="/" className=" underline font-medium">Nike Members</Link></span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>

                    <div className="w-auto flex gap-4 h-auto mx-auto mb-5 mt-[50px]">
                        <button className="w-auto h-auto px-5  py-2 text-center rounded-full text-[15px] text-[#ffffff] bg-[#111111] font-medium font-Inter">JOIN US</button>
                        <button className="w-auto h-auto  px-5 rounded-full text-[15px] text-[#ffffff] bg-[#111111] font-medium font-Inter">SHOP NIKE</button>
                    </div>
                    <div className="w-auto mb-5">
                        <h3 className="text-[20px] font-Helvetica mb-5 font-medium">FAQs</h3>
                        <p className="text-[16px] font-Helvetica font-semibold">Does my card need international purchases enabled?</p>
                        <p className="text-[16px] font-Helvetica  font-normal">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                    </div>
                    <p className="text-[15px] font-Helvetica mb-5 font-normal">Please note, some banks may charge a small transaction fee for international orders.</p>

                    <div className="w-auto mb-5">
                        <p className="text-[16px] font-Helvetica font-semibold">Can I pay for my order with multiple methods?</p>
                        <p className="text-[16px] font-Helvetica mb-5 font-normal">No, payment for Nike orders can't be split between multiple payment methods.</p>
                    </div>

                    <div className="w-auto mb-5">
                        <p className="text-[16px] font-Helvetica font-semibold">What payment method is accepted for SNKRS orders?</p>
                        <p className="text-[16px] font-Helvetica mb-5 font-normal">You can use any accepted credit card to pay for your SNKRS order.</p>
                    </div>

                    <div className="w-auto mb-5">
                        <p className="text-[16px] font-Helvetica font-semibold">Why don't I see Apple Pay as an option?</p>
                        <p className="text-[16px] font-Helvetica mb-5 font-normal">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                    </div>

                    <div className="w-auto mb-5">
                        <p className="text-[15px] font-Helvetica font-normal">Was this answer helpful?</p>
                        <div className="flex gap-3 mt-2">
                            <Image src={thumb2} alt="thumb2" className="w-[30px] h-[30px]" />
                            <Image src={thumb1} alt="thumb1" className="w-[30px] h-[30px]" />
                        </div>
                    </div>
                    <div className="w-auto">
                        <p className="text-[16px] text-[#757575] font-Helvetica mt-[-5px] mb-5 font-medium">RELATED</p>
                        <ul className="ml-5 leading-7 mb-4">
                        <li className="text-[16px] underline font-Helvetica font-medium">WHAT ARE NIKE'S DELIVERY OPTIONS?</li>
                        <li className="text-[16px] underline font-Helvetica font-medium">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</li>
                    </ul>
                    </div>
                </div>

                <div className="col-span-3 border-l-2 ml-2 border-solid border-gray-200">
                    <div className="contact_details text-center w-[250px] mx-auto">
                            <h3 className="text-[28px] font-Helvetica mb-4 font-medium">CONTACT US</h3>
                        <div className="phoneNo w-auto mx-auto mb-8">
                            <Image src={Phone} alt="Phone" className="w-[64px] h-[64px] mx-auto mb-4" />
                            <p className="text-[16px] font-Helvetica mb-4 font-medium">000 800 919 0566</p>
                            <p className="text-[16px] font-Helvetica font-normal">Products & Orders: 24 hours a day, 7 days a week
                            Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                        </div>

                        <div className="phoneNo w-auto mx-auto mb-8">
                            <Image src={textMsg} alt="textMsg" className="w-[64px] h-[64px] mx-auto mb-4" />
                            <p className="text-[16px] font-Helvetica font-medium">24 hours a day</p>
                            <p className="text-[16px] font-Helvetica font-normal">7 days a week</p>
                        </div>

                        <div className="phoneNo w-auto mx-auto mb-8">
                            <Image src={envolop} alt="envolop" className="w-[64px] h-[64px] mx-auto mb-4" />
                            <p className="text-[16px] font-Helvetica font-medium">We'll reply within</p>
                            <p className="text-[16px] font-Helvetica font-normal">five business days</p>
                        </div>

                        <div className="phoneNo w-auto mx-auto mb-8">
                            <Image src={envolop} alt="envolop" className="w-[64px] h-[64px] mx-auto mb-4" />
                            <p className="text-[16px] font-Helvetica font-medium">We'll reply within</p>
                            <p className="text-[16px] font-Helvetica font-normal">five business days</p>
                        </div>

                        <div className="phoneNo w-auto mx-auto mb-8">
                            <Image src={location} alt="location" className="w-[64px] h-[64px] mx-auto mb-4" />
                            <p className="text-[16px] font-Helvetica font-medium">STORE LOCATOR</p>
                            <p className="text-[16px] font-Helvetica font-normal">Find Nike retail stores near you</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}