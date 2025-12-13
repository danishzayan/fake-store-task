import React, { useState, useEffect } from "react";
import { convertUsdToInr, formatInr } from "../utils/currency";

const EditProductModal = ({ isOpen, onClose, onSave, product }) => {
  const [title, setTitle] = useState("");
  const [priceInr, setPriceInr] = useState("");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      const inrValue = convertUsdToInr(product.price);
      setPriceInr(inrValue.toFixed(0));
    }
  }, [product]);

  const handleSave = () => {
    const priceInrAsNumber = parseFloat(priceInr);
    if (!isNaN(priceInrAsNumber)) {
      const priceUsd = priceInrAsNumber / 83;
      onSave({ title, price: parseFloat(priceUsd.toFixed(2)) });
    } else {
      onSave({ title, price: product.price });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="flex flex-col bg-slate-800 shadow-lg rounded-xl py-8 px-6 w-full max-w-md border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-slate-100 font-semibold text-xl mb-6">
          Edit Product
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-slate-400 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#fbcc20]"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-slate-400 mb-2"
            >
              Price (INR)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                ₹
              </span>
              <input
                type="number"
                id="price"
                value={priceInr}
                onChange={(e) => setPriceInr(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-md py-2 px-3 pl-8 text-white focus:outline-none focus:border-[#fbcc20]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-md border border-slate-600 bg-transparent text-slate-300 font-medium text-sm hover:bg-slate-700 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2 rounded-md text-black bg-[#fbcc20] font-medium text-sm hover:bg-[#fbcc20]/80 cursor-pointer"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
