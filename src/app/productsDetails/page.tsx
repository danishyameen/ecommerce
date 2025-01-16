import Image from "next/image";
import productPic from "@/app/images/productPic.png"
import { FiShoppingCart } from "react-icons/fi";

export default function productsDetailsPage() {
    return (
        <div className="productsDetailsPage header_container ">
            <div className="productDetails grid grid-cols-2 gap-5 mt-10 mb-[200px] w-[1000px] mx-auto">
                <div className="productImage w-auto h-auto">
                    <Image src={productPic} alt="productPic" className="w-[500px] h-[500px] mx-auto" />
                </div>
                <div className="productDetailsText w-[400px] h-[400px] mx-auto">
                    <h1 className="mb-4 text-[48px] font-medium font-Poppins leading-[50px]">Nike Air Force 1 PLT.AF.ORM</h1>
                    <p className="text-[15px] mb-3  font-normal font-Poppins text-left">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                    <p className="text-[36px] font-medium mb-2 font-Poppins">₹ 8 695.00</p>
                    <button className="w-[180px] p-2 rounded-full text-[#ffffff] bg-[#111111] text-[15px] font-medium font-Poppins text-center flex gap-2"><FiShoppingCart size={20} className="ml-6" color="#fffffff"/> <span> Add To Cart </span></button>
                </div>
            </div>
        </div>
    )
}