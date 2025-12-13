import React from "react";
import { Link } from "react-router-dom";
import { convertUsdToInr, formatInr } from "../utils/currency";

// react icons
import { MdLocalShipping } from "react-icons/md";
import { IoGift } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";

const ProductCard = ({ product }) => {
  const { id, image, title, price } = product;
  const inrPrice = formatInr(convertUsdToInr(price));

  return (
    <div className="border border-gray-300 dark:border-slate-700 w-full relative rounded-2xl overflow-hidden">
      {/* badge */}
      <span className="bg-red-500 rounded-b-md px-3 py-1 text-[0.9rem] text-white absolute top-0 left-4">
        Best Value
      </span>

      {/* product image */}
      <img
        alt="product/image"
        src={image}
        className="w-full h-48 object-contain mt-6"
      />

      {/* product details */}
      <div className="p-4 pt-0">
        <h3 className="text-[1.4rem] dark:text-[#abc2d3] font-semibold mb-1 mt-2 truncate">
          {title}
        </h3>

        {/* price */}
        <div className="flex items-center mt-3 gap-[15px]">
          <p className="text-[1.150rem] text-[#fbcc30] font-semibold mt-1">
            {inrPrice}
          </p>
        </div>

        {/* shipping offers */}
        <div className="flex items-center border-t dark:border-slate-700 border-gray-300 mt-3 gap-[15px] pt-[5px]">
          <div className="flex items-center gap-[6px] dark:text-slate-400 text-gray-400 text-[0.9rem]">
            <MdLocalShipping />
            <p>Free shipping</p>
          </div>
          <div className="flex items-center gap-[6px] dark:text-slate-400 text-gray-400 text-[0.9rem]">
            <IoGift />
            <p>Free gift</p>
          </div>
        </div>

        {/* actions */}
        <div className="flex items-center justify-between mt-7 gap-[15px]">
          <Link
            to={`/products/${id}`}
            className="py-[9px] px-4 text-black font-medium rounded-2xl grow justify-center flex items-center gap-[0.5rem] hover:bg-[#fbcc30]/80 text-[1rem] bg-[#fbcc20] transition-all duration-200 cursor-pointer"
          >
            View Product
            <FiArrowUpRight className="text-[1.3rem]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
