import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiGroupFill } from "react-icons/ri";
import "./CustomStepper.css";

const CustomStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <section className="mb-24 mt-12">
      <div className="d-flex justify-between items-center mx-auto sm:w-2/5 w-11/12  my-6">
        <h4 className=" text-black font-bold mb-0">Train Order #49430953</h4>
        <p className="text-[#de4d11] font-bold text-xl  mb-0">HELP</p>
      </div>
      <div className="custom-stepper border-2 border-gray-200 py-2 px-10 sm:w-3/4 w-11/12 mx-auto  rounded-lg">
        <div
          className={`step ${currentStep === 0 && "active"}`}
          onClick={() => handleStepClick(0)}
        >
          <FaLocationDot className={`icon ${currentStep === 0 && "active"}`} />
          <span
            className={`label text-[#de4d11] font-bold text-justify ${
              currentStep === 0 && "active"
            }`}
          >
            Biryani
            <p className="py-1 sm:w-3/4 w-11/12 text-gray-400 font-bold">
              South Park Roshan Tower First Floor Main Road
            </p>
          </span>
        </div>
        <div
          className={`step ${currentStep === 1 && "active"}`}
          onClick={() => handleStepClick(1)}
        >
          <RiGroupFill className={`icon ${currentStep === 1 && "active"}`} />
          <span
            className={`label text-[#de4d11] font-bold text-justify ${
              currentStep === 1 && "active"
            }`}
          >
            Sakib
            <p className="py-1 sm:w-3/4 w-11/12 text-gray-400 font-bold">
              Line No 6, Straight Mile Rd, A Block, Dhalkiidh, Jamsphedpur..
              Jharkhand 832940, India
            </p>
          </span>
          <div className="line"></div> {/* Vertical line */}
        </div>
        <div
          className={`step ${currentStep === 2 && "active"}`}
          onClick={() => handleStepClick(2)}
        >
          <IoCheckmarkDoneSharp
            className={`icon text-green-600 ${currentStep === 2 && "active"}`}
          />
          <span className={`label ${currentStep === 2 && "active"}`}>
            <p className="py-1 sm:w-3/4 w-11/12 text-gray-400 text-justify font-bold">
              {" "}
              Order delivered on Dec 21, 4:23PM
            </p>
          </span>
          <div className="line"></div> {/* Vertical line */}
        </div>
      </div>
      <div>
        <h3 className="text-justify mb-0  text-black font-bold px-4 py-4 mt-2">
          Bill Details
        </h3>
        <div className="d-flex justify-between items-center px-4 py-3">
          <div>
            <h4 className="text-justify w-10/12 text-black font-bold text-lg mb-0">
              Paneer Tikka Stuffed Garlic Bread x1
            </h4>
            <p className="font-bold mb-0 text-gray-400 pb-2 text-justify">
              Cheese Burst, Medium
            </p>
          </div>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹12.00</p>
        </div>
        <div className="d-flex justify-between items-center px-4 py-3">
          <div>
            <h4 className="text-justify w-10/12 text-black font-bold text-lg mb-0">
              Paneer Tikka Stuffed Garlic Bread x1
            </h4>
            <p className="font-bold mb-0 text-gray-400 pb-2 text-justify">
              Cheese Burst, Medium
            </p>
          </div>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹12.00</p>
        </div>
        <div className="d-flex justify-between items-center px-4 py-3">
          <div>
            <h4 className="text-black font-bold text-lg mb-0">
              Indi Tandoori Paneer Pizza x1
            </h4>
            <p className="font-bold mb-0 text-gray-400 pb-2 text-justify">
              New Hand Tossed, Medium
            </p>
          </div>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹12.00</p>
        </div>
      </div>
      <div className="rounded-xl border-t border-gray-300 x-4">
        <div className="d-flex justify-between items-center px-4 py-2">
          <h4 className="text-black font-bold text-lg mb-0 py-2">Item Total</h4>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹12.234</p>
        </div>
        <div className="d-flex justify-between items-center px-4 py-2">
          <h4 className="text-black font-bold text-lg mb-0 py-2">
            Restaurant Handing Charges
          </h4>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹00.00</p>
        </div>
        <div className="d-flex justify-between items-center px-4 py-2">
          <h4 className="text-black font-bold text-lg mb-0 py-2">
            Discount Applied (FREEISH)
          </h4>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹20.00</p>
        </div>
        <div className="d-flex justify-between items-center px-4 py-2">
          <h4 className="text-black font-bold text-lg mb-0 py-2">Taxes</h4>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹20.00</p>
        </div>
        <div className="d-flex justify-between items-center px-4 py-2">
          <h4 className="text-black font-bold text-lg mb-0 py-2">
            Paid Via Bank
          </h4>
          <p className="text-[#de4d11] mb-0 font-bold text-lg">₹20.00</p>
        </div>
      </div>
      <button className="bg-[#DE4D11] p-2 m-4 w-2/4 rounded-full text-white font-semibold text-xl">
        Done
      </button>
    </section>
  );
};

export default CustomStepper;
