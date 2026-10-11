import React from "react";

function Modal({ isModalOpen, closeModal }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isModalOpen ? "" : "hidden"}`}
    >
      <div className="modal-container">
        <div className="bg-white text-center p-5 h-96 lg:w-125 rounded shadow-md">
          {/* Modal Content */}
          <h2 className="text-black text-xl font-semibold mb-4 mt-6 uppercase">
            Please <span className="text-orange-500">Login</span> Here!
          </h2>
          <form className="px-4">
            <div className="mb-5 space-y-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button type="submit" className="font-semibold text-base rounded-md px-8 py-3 bg-orange-500 hover:bg-orange-600  transition-all duration-200 ease-in shadow-lg shadow-orange-500/25 outline-none cursor-pointer">
                Login
              </button>
              <button type="button" onClick={closeModal} className="font-semibold text-base rounded-md px-8 py-3 bg-gray-500 hover:bg-gray-600 text-gray-900 transition-all duration-200 ease-in shadow-lg shadow-orange-500/25 outline-none cursor-pointer">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
