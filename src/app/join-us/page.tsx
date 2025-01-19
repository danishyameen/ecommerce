import Image from "next/image";
import nike_logo from "@/app/images/nike_logo.png";
import Link from "next/link";

export default function JoinPage() {
    return (

        <div className="joinPage mx-auto w-[500px] p-5 mt-[10px] mb-10">
            <div className="w-[324px] mx-auto text-center align-center h-auto">
                <div className="nike_logo w-auto h-auto ml-7 mb-8">
                    <Image src={nike_logo} alt="nike_logo" className="mx-auto w-[58.85px] h-[20.54px]" />
                </div>

                <div className="joinFormText w-auto h-auto mx-auto mb-5">
                    <h3 className="text-[#111111] font-bold text-[18px] mb-8 font-[Helvetica]">BECOME A NIKE MEMBER</h3>
                    <p className="text-[#8D8D8D] text-[14px]  text-center w-auto h-auto font-[Inter]">Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community.</p>
                </div>

                <div className="joinForm w-auto h-auto">
                    <form action="">
                        <div className="inputFields w-auto h-auto mx-auto mb-5">
                            <input type="text" name="email" placeholder="Email address" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
                            <input type="password" name="password" placeholder="Password" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
                            <input type="text" name="firstName" placeholder="First Name" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
                            <input type="text" name="lastName" placeholder="Last Name" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
                            <input type="text" placeholder="Date of Birth" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
                            <p className="text-[#8D8D8D] mb-2 text-[13px] font-[Inter]">Get a Nike Member Reward every year on your Birthday.</p>
                            <select name="" id="" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" >
                                <option value="India">India</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Japan">Japan</option>
                                <option value="China">China</option>
                            </select>
                            <div className="checkbox flex  justify-between">
                                <button className="border-[#BCBCBC] border-[1px] border-solid text-[#8D8D8D] font-normal text-[13px]  font-[Helvetica] w-[155px]  p-2">Male</button>
                                <button className="border-[#BCBCBC] border-[1px] border-solid  text-[#8D8D8D]  font-normal text-[13px] font-[Helvetica] w-[155px]  p-2">Female</button>
                            </div>
                        </div>

                        <div className="flex justify-between mb-5">
                            <div className="checkbox flex gap-4">
                                <input type="checkbox" name="" id="" className="border-[#BCBCBC] w-[40px] h-[40px]" />
                                <p className="text-[#8D8D8D] text-left font-normal text-[13px] font-[Helvetica]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                            </div>
                            
                        </div>
                        <div className="formText w-auto h-auto mx-auto mb-5">
                            <p className="text-[#8D8D8D] text-[13px] font-normal  font-[Helvetica]">By creating an account, you agree to Nike's  <span className="underline" ><Link href="/" > Privacy Policy </Link></span> and <span className="underline"> <Link href="/"> Terms of Use.</Link></span></p>
                        </div>
                        <div className="joinButton w-auto h-auto mx-auto mb-5">
                            <button className="bg-[#111111] text-white font-normal text-[13px] font-[Helvetica] w-full p-2">JOIN US</button>
                        </div>
                        <div className="joinUs">
                            <p className="text-[#8D8D8D] text-[13px]">Already a Member? <span className="text-[#111111] underline"> <Link href="/login" > Sign In. </Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )


}