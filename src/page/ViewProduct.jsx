import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../features/products/productsSlice";
import Loader from "../components/Loader";
import { convertUsdToInr, formatInr } from "../utils/currency";
import {
  FaStar,
  FaHeart,
  FaArrowLeft,
  FaTruck,
  FaEdit,
  FaTrash,
  FaBolt,
} from "react-icons/fa";

const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct: product, status } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0f172a]">
        <Loader />
      </div>
    );
  }

  if (status === "failed" || !product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#0f172a] text-slate-300 gap-4">
        <p className="text-xl">Product not found.</p>
        <Link to="/products" className="text-[#fbcc20] hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  // Calculate prices
  const inrPrice = formatInr(convertUsdToInr(product.price));
  const fakeOriginalPrice = formatInr(convertUsdToInr(product.price * 1.2));

  return (
    <div className="relative min-h-screen font-['Poppins'] text-white bg-[#0f172a] overflow-x-hidden">
      {/* Background SVG */}
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
        <svg
          className="w-full h-full object-cover opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1440 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#1D293D"
            strokeOpacity=".7"
            d="M-15.227 702.342H1439.7"
          />
          <circle
            cx="711.819"
            cy="372.562"
            r="308.334"
            stroke="#1D293D"
            strokeOpacity=".7"
          />
          <circle
            cx="16.942"
            cy="20.834"
            r="308.334"
            stroke="#1D293D"
            strokeOpacity=".7"
          />
          <path
            stroke="#1D293D"
            strokeOpacity=".7"
            d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
          />
          <circle
            cx="782.595"
            cy="411.166"
            r="308.334"
            stroke="#1D293D"
            strokeOpacity=".7"
          />
        </svg>
      </div>

      {/* Navigation Header */}
      <div className="container mx-auto px-6 py-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#fbcc20] transition-colors group"
        >
          <div className="p-2 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-[#fbcc20] group-hover:text-black transition-all">
            <FaArrowLeft size={14} />
          </div>
          <span className="font-medium text-sm">Back to Products</span>
        </Link>
      </div>

      {/* Product Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column: Image Container */}
          <div className="w-full lg:w-1/2 relative group animate-in fade-in slide-in-from-bottom-6 duration-700">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#fbcc20] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition duration-500"></div>

            {/* Image Box */}
            <div className="relative border border-slate-700 rounded-3xl p-8 md:p-16 flex items-center justify-center min-h-[400px] md:min-h-[500px] bg-slate-800/20 backdrop-blur-sm">
              <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wide shadow-md z-10">
                Best Value
              </div>

              <img
                src={product.image}
                alt={product.title}
                className="max-h-[300px] md:max-h-[400px] w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition duration-500 relative z-10"
              />
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            {/* Category and Edit/Delete Buttons Container */}
            <div className="flex items-center justify-between mb-5">
              <span className="w-fit bg-[#fbcc20]/10 text-[#fbcc20] border border-[#fbcc20]/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-slate-400 hover:text-[#fbcc20] hover:bg-[#fbcc20]/10 rounded-full transition-all cursor-pointer"
                  title="Edit Product"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all cursor-pointer"
                  title="Delete Product"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-slate-50 tracking-tight">
              {product.title}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-6 mb-8 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="font-bold text-white text-sm">
                  {product.rating.rate}
                </span>
                <span className="text-slate-400 text-xs">/ 5</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <FaHeart className="text-pink-500" />
                <span>
                  <strong className="text-slate-200">
                    {product.rating.count}
                  </strong>{" "}
                  people loved this
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">
                Total Price
              </p>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl md:text-5xl font-bold text-[#fbcc20]">
                  {inrPrice}
                </span>
                <span className="text-xl text-slate-600 line-through decoration-slate-600">
                  {fakeOriginalPrice}
                </span>
                <span className="text-green-500 text-sm font-medium bg-green-500/10 px-2 py-0.5 rounded">
                  20% OFF
                </span>
              </div>
              <p className="text-slate-500 text-sm mt-2">
                Inclusive of all taxes
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-2">Description</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </div>

            {/* Action Row: Buy Now + Free Delivery */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Buy Now Button */}
              <button className="flex-1 bg-[#fbcc20] text-black font-bold py-4 px-6 rounded-xl shadow-[0_4px_14px_0_rgba(251,204,32,0.39)] hover:shadow-[0_6px_20px_rgba(251,204,32,0.23)] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg cursor-pointer">
                <FaBolt />
                Buy Now
              </button>

              {/* Free Delivery Info */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-800 shrink-0">
                <div className="p-2 bg-slate-800 rounded-lg text-[#fbcc20]">
                  <FaTruck size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-200 font-medium text-sm">
                    Free Delivery
                  </span>
                  <span className="text-slate-500 text-xs">
                    On orders over ₹500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
