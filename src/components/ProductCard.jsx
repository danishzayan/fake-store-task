
import React, {useState} from "react";

// react icons
import {MdLocalShipping} from "react-icons/md";
import {IoGift} from "react-icons/io5";
import {FiArrowUpRight} from "react-icons/fi";
import {RiHeartAddLine, RiHeartFill} from "react-icons/ri";

const ProductCard = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="border border-gray-300 dark:border-slate-700 w-full md:w-[60%] relative rounded-2xl overflow-hidden">

            {/* badge */}
            <span
                className="bg-red-500 rounded-b-md px-3 py-1 text-[0.9rem] text-white absolute top-0 left-4">Best Value</span>

            {/* product image */}
            <img alt="product/image" src="https://i.ibb.co.com/z4BV3S2/image-1.png"
                 className="w-full mt-6"/>

            {/* product details */}
            <div className="p-4 pt-0">
                <h3 className="text-[1.4rem] dark:text-[#abc2d3] font-semibold mb-1 mt-2">Apple</h3>

                <span className="text-[0.9rem] dark:text-slate-400 font-normal text-gray-500 line-clamp-2">2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver</span>

                {/* price & discount offer */}
                <div className="flex items-center mt-3 gap-[15px]">
                    <p className="text-[1.150rem] dark:text-[#abc2d3] font-semibold mt-1">$1024.99+</p>

                    <p className="border text-green-600 text-[0.8rem] border-green-400 px-2 py-1 rounded-md">35%
                        Off</p>
                </div>

                {/* shipping offers */}
                <div
                    className="flex items-center border-t dark:border-slate-700 border-gray-300 mt-3 gap-[15px] pt-[5px]">
                    <div className="flex items-center gap-[6px] dark:text-slate-400 text-gray-400 text-[0.9rem]">
                        <MdLocalShipping/>
                        <p>Free shipping</p>
                    </div>
                    <div className="flex items-center gap-[6px] dark:text-slate-400 text-gray-400 text-[0.9rem]">
                        <IoGift/>
                        <p>Free gift</p>
                    </div>
                </div>

                {/* actions */}
                <div className="flex items-center justify-between mt-7 gap-[15px]">
                    <button
                        className="py-[9px] px-4 text-white rounded-2xl grow justify-center flex items-center gap-[0.5rem] hover:bg-[#01849b] text-[1rem] bg-[#fbcc20] transition-all duration-200">
                        View Deal
                        <FiArrowUpRight className="text-[1.3rem]"/>
                    </button>
                    <button className="p-[9px] rounded-full border-2 border-[#fbcc20]">
                        {
                            isFavorite ? (
                                <RiHeartFill onClick={() => setIsFavorite(false)}
                                             className="text-[#fbcc20] text-[1.3rem]"/>
                            ) : (
                                <RiHeartAddLine onClick={() => setIsFavorite(true)}
                                                className="text-[#fbcc20] text-[1.3rem]"/>
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
          