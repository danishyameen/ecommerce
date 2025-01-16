import Image from "next/image";
import small_logo from "@/app/images/small_logo.png";
import nike_logo from "@/app/images/nike_logo.png";
import cart from "@/app/images/cart.png";
import heart from "@/app/images/heart.png";


import Link from "next/link";
import Search from "./search_box/Search";

export default function Header() {
    return (
        <>
            <header className="w-auto h-[130px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] sticky top-0 z-10">
                <div className="topbar bg-[#F5F5F5] pt-[10px] h-auto">
                    <div className=" flex justify-between header_container">
                        <div className="small_logo w-auto h-auto">
                        <Link href="/"><Image src={small_logo} alt="small_logo" className="w-[24px] h-[24px]" /></Link>
                        </div>
                        <ul className="w-[272.81px] h-[36px] text-[#111111] font-medium text-[14px]">
                            <li className="hover:underline hover:text-blue-500"><Link href="/">Find a Store</Link></li>
                            <li className="mx-2">|</li>
                            <li className="hover:underline hover:text-blue-500"><Link href="/contact-us">Help</Link></li>
                            <li className="mx-2">|</li>
                            <li className="hover:underline hover:text-blue-500"><Link href="/join-us">Join Us</Link></li>
                            <li className="mx-2">|</li>
                            <li className="hover:underline hover:text-blue-500"><Link href="/login">Sign In</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="main_header h-[85px] mt-[0px] pt-[30px] bg-[#FFFFFF]">
                    <div className="header_container  flex justify-between">
                        <div className="w-[78.47px] h-[78.47px]">
                        <Link href="/"> <Image src={nike_logo} alt="nike_logo" className="w-[58.85px] h-[20.54px]" /></Link>
                        </div>
                        <div className="navbar">
                            <nav className=" flex justify-between ">
                                <ul className="h-[60px] mr-[80px] font-medium">
                                    <li className="mr-5"><Link href="/">New & Featured</Link></li>
                                    <li className="mr-5"><Link href="/">Men</Link></li>
                                    <li className="mr-5"><Link href="/">Women</Link></li>
                                    <li className="mr-5"><Link href="/">Kids</Link></li>
                                    <li className="mr-5"><Link href="/">Sales</Link></li>
                                    <li className="mr-5"><Link href="/">SNRKS</Link></li>
                                </ul>
                                <div className="search_box mt-[-10px]">
                                    <Search />
                                </div>
                                <div className="flex ml-4 mr-4 gap-4">
                                    <div className="WhishList ml-2">
                                        <Link href="/productsDetails"><Image src={heart} alt="heart" className="w-[24px] h-[24px]" /></Link>
                                    </div>
                                    <div className="products ml-2">
                                        <Link href="/cart"> <Image src={cart} alt="cart" className="w-[24px] h-[24px]" /></Link>
                                    </div>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}