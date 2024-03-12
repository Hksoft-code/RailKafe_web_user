import { useState } from "react";
import google from "./../../Assets/logos_google-pay.png";
import visa from "./../../Assets/logos_visa.png";
import master from "./../../Assets/logos_mastercard.png";
import paypal from "./../../Assets/logos_paypal.png";
import parkpay from "./../../Assets/icon-park_pay-code.png";
import "./payment.css";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/ordersuccessfull");
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOptionSelect = (option) => {
    console.log(`You selected: ${option}`);
  };
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <section className="mb-24 mt-4">
      <form action="">
        <div className="d-flex flex-col items-center">
          <input
            className="px-6 py-2 border  sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="number"
            name=""
            id=""
            placeholder="Enter Your PNR"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="number"
            name=""
            id=""
            placeholder="Enter Coach Number"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="number"
            name=""
            id=""
            placeholder="Enter Seat Number"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="text"
            name=""
            id=""
            placeholder="Enter Name"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="email"
            name=""
            id=""
            placeholder="Enter Email id"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="number"
            name=""
            id=""
            placeholder="Enter Phone Number"
          />
          <textarea
            className="px-6 py-2 border  sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            name=""
            id=""
            cols=""
            rows=""
            placeholder="Add a note"
          ></textarea>
          <div className="relative w-full">
            <input
              type="text"
              readOnly
              placeholder="Add GST"
              onClick={toggleModal}
              className="px-6 py-2 border  sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            />

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                <div className="bg-white p-6 rounded-md sm:w-1/4 w-5/6">
                  <div className="d-flex  items-center py-2 justify-between">
                    <p className="text-lg font-bold text-gray-600 mb-0">
                      Add GST
                    </p>
                    <button
                      onClick={toggleModal}
                      className=" px-4 py-2 bg-[#DE4D11] text-white rounded-md"
                    >
                      Done
                    </button>
                  </div>
                  <div>
                    <label className="flex items-center justify-between py-2">
                      Yes
                      <input
                        type="radio"
                        name="confirm"
                        value="yes"
                        onChange={() => handleOptionSelect("Yes")}
                        className="mr-2 inputpnr"
                      />
                    </label>
                    <label className="flex items-center justify-between py-2">
                      No
                      <input
                        type="radio"
                        name="confirm"
                        value="no"
                        onChange={() => handleOptionSelect("No")}
                        className="mr-2"
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="d-flex justify-between items-center sm:w-3/4 w-11/12 py-2 px-4">
            <p className="text-gray-600 font-bold">Order Total</p>
            <p className="text-[#DE4D11] font-bold ">₹1322.00</p>
          </div>
          <div className="sm:w-3/4 w-11/12">
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
          <div className="rounded-xl border-t border-gray-300 x-4 sm:w-3/4 w-11/12">
            <div className="d-flex justify-between items-center px-4 py-2">
              <h4 className="text-black font-bold text-lg mb-0 py-2">
                Item Total
              </h4>
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
          <label
            htmlFor=""
            className="text-gray-600 font-bold mb-2 text-lg w-3/4 text-justify "
          >
            Choose payment method
          </label>
          <label className="border-2 sm:w-3/4 w-11/12 py-2 px-4 d-flex justify-between  items-center rounded-xl text-lg text-gray-500">
            Cash on Delivery
            <input
              type="radio"
              value="cash_on_delivery"
              checked={selectedMethod === "cash_on_delivery"}
              onChange={handleMethodChange}
            />
          </label>
          <br />
          <label className="border-2 sm:w-3/4 w-11/12 py-2 px-4 d-flex justify-between  items-center rounded-xl">
            <div className="d-flex items-center justify-around">
              <img src={google} className=" w-11 px-1" alt="" />
              <img src={visa} className=" w-11 px-1" alt="" />
              <img src={master} className=" w-11 px-1" alt="" />
              <img src={paypal} className=" w-11 px-1" alt="" />
              <img src={parkpay} className=" w-11 px-1" alt="" />
            </div>
            <input
              type="radio"
              value="online_payment"
              checked={selectedMethod === "online_payment"}
              onChange={handleMethodChange}
            />
          </label>
          <button
            className="bg-[#DE4D11] p-2 m-4 w-2/4 rounded-full text-white font-semibold text-lg"
            onClick={handleSubmit}
          >
            Proceed to pay
          </button>
          <hr style={{ width: "50%", border: "2px solid black" }} />
        </div>
      </form>
    </section>
  );
};

export default Payment;
