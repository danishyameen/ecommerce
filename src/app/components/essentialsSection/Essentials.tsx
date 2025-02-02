"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import EssentialsPic1 from "@/app/images/EssentialsPic1.png";
import EssentialsPic2 from "@/app/images/EssentialsPic2.png";
import EssentialsPic3 from "@/app/images/EssentialsPic3.png";

export default function EssentialsSection() {
    return (
        <motion.section
            className="py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <motion.h2
                    className="font-medium text-2xl md:text-3xl mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    The Essentials
                </motion.h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[EssentialsPic1, EssentialsPic2, EssentialsPic3].map((pic, index) => (
                        <motion.div
                            key={index}
                            className="relative group overflow-hidden rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={pic}
                                alt={`EssentialsPic${index + 1}`}
                                className="object-cover w-full h-full group-hover:brightness-75 transition-all duration-300"
                            />
                            <motion.div
                                className="absolute inset-0 flex justify-center items-end pb-8"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <button className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100 transition-all">
                                    {index === 0 ? "Men's" : index === 1 ? "Women's" : "Kids"}
                                </button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}





// import Image from "next/image";
// import EssentialsPic1 from "@/app/images/EssentialsPic1.png"
// import EssentialsPic2 from "@/app/images/EssentialsPic2.png"
// import EssentialsPic3 from "@/app/images/EssentialsPic3.png"


// export default function EssentialsSection() {
//     return (
//         <section className="py-10">
//             <div className="max-w-6xl mx-auto px-4">
//                 {/* Title */}
//                 <h2 className="font-medium text-2xl md:text-3xl mb-8 text-center">The Essentials</h2>
                
//                 {/* Responsive Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {/* Men's Section */}
//                     <div className="relative group">
//                         <Image
//                             src={EssentialsPic1}
//                             alt="EssentialsPic1"
//                             className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
//                             <button className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100">
//                                 Men's
//                             </button>
//                         </div>
//                     </div>

//                     {/* Women's Section */}
//                     <div className="relative group">
//                         <Image
//                             src={EssentialsPic2}
//                             alt="EssentialsPic2"
//                             className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
//                             <button className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100">
//                                 Women's
//                             </button>
//                         </div>
//                     </div>

//                     {/* Kids' Section */}
//                     <div className="relative group">
//                         <Image
//                             src={EssentialsPic3}
//                             alt="EssentialsPic3"
//                             className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
//                             <button className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100">
//                                 Kids
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

