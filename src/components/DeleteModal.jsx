const Modal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center bg-slate-800 shadow-lg rounded-xl py-8 px-6 md:w-[460px] w-[370px] border border-slate-700 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center p-4 bg-red-500/10 rounded-full border border-red-500/20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.875 5.75h1.917m0 0h15.333m-15.333 0v13.417a1.917 1.917 0 0 0 1.916 1.916h9.584a1.917 1.917 0 0 0 1.916-1.916V5.75m-10.541 0V3.833a1.917 1.917 0 0 1 1.916-1.916h3.834a1.917 1.917 0 0 1 1.916 1.916V5.75m-5.75 4.792v5.75m3.834-5.75v5.75"
              stroke="#DC2626"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-slate-100 font-semibold mt-4 text-xl">
          {title || "Are you sure?"}
        </h2>
        <div className="text-sm text-slate-400 mt-2 text-center">
          {children || (
            <p>
              Do you really want to continue? This action cannot be undone.
            </p>
          )}
        </div>
        <div className="flex items-center justify-center gap-4 mt-6 w-full">
          <button
            type="button"
            onClick={onClose}
            className="w-full md:w-36 h-10 rounded-md border border-slate-600 bg-transparent text-slate-300 font-medium text-sm hover:bg-slate-700 active:scale-95 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="w-full md:w-36 h-10 rounded-md text-white bg-red-600 font-medium text-sm hover:bg-red-700 active:scale-95 transition cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;