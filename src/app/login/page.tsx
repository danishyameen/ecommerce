import Image from "next/image";
import nike_logo from "@/app/images/nike_logo.png";
import Link from "next/link";



export default function LoginPage() {
    return (

        <div className="loginPage mx-auto w-[500px] p-5 mt-[10px] mb-10">
            <div className="w-[324px] mx-auto text-center align-center h-auto">
                <div className="nike_logo w-auto h-auto ml-7 mb-4">
                    <Image src={nike_logo} alt="nike_logo" className="mx-auto w-[58.85px] h-[20.54px]" />
                </div>

                <div className="loginFormText w-auto h-auto mx-auto">
                    <h3 className="text-[#111111] font-bold text-[18px] mb-4 font-[Helvetica]">YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE</h3>
                </div>

                <div className="loginForm w-auto h-auto">
                    <form action="">
                        <div className="inputFields w-auto h-auto mx-auto mb-5">
                            <input type="text" placeholder="Email address" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full pt-2 pb-2 pr-2 pl-4" />
                            <input type="password" placeholder="Password" className=" box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full pt-2 pb-2 pr-2 pl-4 " />
                        </div>

                        <div className="flex justify-between mb-5">
                            <div className="checkbox flex gap-2">
                                <input type="checkbox" name="" id="" className="border-[#BCBCBC] outline-none" />
                                <p className="text-[#8D8D8D] font-normal text-[14px] font-[Helvetica]">Keep me signed in</p>
                            </div>
                            <p className="text-[#BCBCBC] font-normal text-[14px] font-[Helvetica]">Forgotten your password?</p>
                        </div>
                        <div className="formText w-auto h-auto mx-auto mb-5">
                            <p className="text-[#8D8D8D] text-[13px] font-normal  font-[Helvetica]">By logging in, you agree to Nike's <span className="underline" ><Link href="/" > Privacy Policy </Link></span> and <span className="underline"> <Link href="/"> Terms of Use.</Link></span></p>
                        </div>
                        <div className="loginButton w-auto h-auto mx-auto mb-5">
                            <button className="bg-[#111111] text-white font-normal text-[13px] font-[Helvetica] w-full p-2">SIGN IN</button>
                        </div>
                        <div className="joinUs">
                            <p className="text-[#8D8D8D] text-[13px]">Not a Member? <span className="text-[#111111] underline"> <Link href="/join-us" > Join Us. </Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )


}