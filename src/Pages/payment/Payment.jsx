import { useEffect, useState } from "react";
import google from "./../../Assets/logos_google-pay.png";
import visa from "./../../Assets/logos_visa.png";
import master from "./../../Assets/logos_mastercard.png";
import paypal from "./../../Assets/logos_paypal.png";
import parkpay from "./../../Assets/icon-park_pay-code.png";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./payment.css";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { placeOrder } from "./Services/PaymentServices";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const { cart, totalQuantity, totalPrice } = useSelector((item) => item.order);
  console.log("cart details xxxxxxxxxxxxxxxxxxxxxxx", cart);
  const [showModal, setShowModal] = useState(false);
  const [PNR, setPNR] = useState("");
  const [coach_number, setCoach_number] = useState("");
  const [seatNum, setSeatNum] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addNote, setAddNote] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [restId, setRest_ID] = useState("");
  const [placeOrderMetaData, setPlaceOrderMetaData] = useState([]);
  const [placeOrderMetaDataByPNR, setPlaceOrderMetaDataByPNR] = useState([]);
  const [isGst, setisGst] = useState(false);
  const [pnrset, setPnrset] = useState("");
  const [setCoach, setSetCoach] = useState("");
  const [setseatnum, setSetseatnum] = useState("");
  // const [onlinepaymenturl, setOnlinepaymenturl] = useState({});

  useEffect(() => {
    const storedData = sessionStorage.getItem("placeOrderdata");
    const DataByPnr = sessionStorage.getItem("traindetaildatabypnr");
    const pnrnumber = sessionStorage.getItem("pnr");
    setPnrset(pnrnumber);
    const res_id = sessionStorage.getItem("res_id");
    console.log(res_id, "resttttttttttttttttttttttttttttttttt");
    if (res_id) {
      setRest_ID(res_id);
    }
    const StoredDataJSON = JSON.parse(storedData);

    // const StoredRestId = JSON.parse(res_id);
    console.log("storage ", StoredDataJSON, res_id);
    if (StoredDataJSON) {
      setPlaceOrderMetaData(StoredDataJSON);
    }
    if (DataByPnr) {
      const StoredDataPNRJSON = JSON.parse(DataByPnr);
      if (StoredDataPNRJSON) {
        setPlaceOrderMetaDataByPNR(StoredDataPNRJSON);
      }
    }
  }, []);
  useEffect(() => {
    if (placeOrderMetaDataByPNR && placeOrderMetaDataByPNR.seatInfo) {
      const coachValue = placeOrderMetaDataByPNR.seatInfo.coach;
      const seatNumValue = placeOrderMetaDataByPNR.seatInfo.noOfSeats;

      // Set state values using the setter functions
      setSetCoach(coachValue);
      setSetseatnum(seatNumValue);
    } else {
      console.error("placeOrderMetaDataByPNR or seatInfo is undefined");
    }
  }, [placeOrderMetaDataByPNR]);
  const transformedCart = cart.map((item) => ({
    foodMenuItemId: item.food_menu_id, // Save the item id
    quantity: item.quantity,
  }));
  console.log("restttt idddd", restId);
  console.log(
    "placeOrderMetaData",
    placeOrderMetaData,
    placeOrderMetaDataByPNR,
    placeOrderMetaDataByPNR.seatInfo,
    placeOrderMetaDataByPNR.seatInfo
  );

  const {
    boarding_station,
    dateof_journey,
    delivery_date_time,
    delivery_station_code,
    train_no,
  } = placeOrderMetaData;
  const navigate = useNavigate();

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const payload = {
      full_name: Name,
      email: email,
      phone: phoneNumber,
      boarding_station:
        placeOrderMetaDataByPNR?.boardingInfo?.stationCode || boarding_station,
      claim_gst: isGst,
      coach_number: setCoach || coach_number,
      delivery_date_time:
        delivery_date_time || placeOrderMetaDataByPNR.trainInfo.dt,
      delivery_station_code:
        delivery_station_code ||
        placeOrderMetaDataByPNR.destinationInfo.stationCode,
      discount: 0,
      final_amount: totalPrice,
      grand_total: TaxPrice + totalPrice,
      isPaid: false,
      dateof_journey: dateof_journey || placeOrderMetaDataByPNR?.trainInfo?.dt,
      order_note: addNote,
      order_source: "website",
      pay_mode: selectedMethod,
      pnr_no: pnrset || PNR,
      resturant_id: restId,
      seat_no: setseatnum || seatNum,
      tax_amount: TaxPrice,
      train_no: placeOrderMetaDataByPNR?.trainInfo?.trainNo || train_no,
      foodMenuItems: JSON.stringify(transformedCart),
    };
    sessionStorage.setItem("PlaceOrderData", payload);
    // sessionStorage.removeItem("placeOrderdata");
    console.log("response payload", payload);
    try {
      const response = await placeOrder(payload);
      console.log("placeorder response", response);
      const responseData = response.data?.data?.data;

      if (!responseData || Object.keys(responseData).length === 0) {
        navigate("/ordersuccessfull");
        return; // Exit early to avoid further processing
      }

      if (!responseData.redirectInfo || !responseData.redirectInfo.url) {
        console.error("Invalid response data:", responseData);
        return; // Exit early if response data or required properties are missing
      }

      const onlineDataUrl = responseData.redirectInfo.url;
      // setOnlinepaymenturl(onlineDataUrl);
      console.log("onlinepaymenturl", onlineDataUrl);

      // Open the payment URL in a new window
      window.open(onlineDataUrl, "_blank");

      setPNR("");
      setCoach_number("");
      setSeatNum("");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setAddNote("");
      setSelectedMethod("");
      setPnrset("");
      setSetCoach("");
      setSetseatnum("");
      sessionStorage.removeItem("traindetaildatabypnr");
    } catch (e) {
      console.log("error", e);
    }
  };

  // const handleSubmit = () => {
  //   if (selectedMethod) {
  //     navigate("/ordersuccessfull");
  //   } else {
  //     toast.error("Please select a payment method");
  //   }
  // };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOptionSelect = (option) => {
    console.log(`You selected: ${option}`);
    setisGst(option);
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const TaxPrice = parseFloat((totalPrice * 0.15).toFixed(3));
  return (
    <section className="mb-24 mt-4">
      <form action="" onSubmit={handlePlaceOrder}>
        <div className="d-flex flex-col items-center">
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="number"
            value={pnrset || PNR}
            required
            onChange={(e) => setPNR(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                // Prevent default behavior of backspace key
                e.preventDefault();
                // Remove the last character from the input value
                setPnrset((prevPNR) => prevPNR.slice(0, -1));
              }
            }}
            name=""
            id=""
            placeholder="Enter Your PNR"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="text"
            name=""
            id=""
            value={setCoach || coach_number}
            required
            onChange={(e) => setCoach_number(e.target.value)}
            placeholder="Enter Coach Number"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="number"
            name=""
            id=""
            value={setseatnum || seatNum}
            required
            onChange={(e) => setSeatNum(e.target.value)}
            placeholder="Enter Seat Number"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="text"
            name=""
            id=""
            value={Name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email id (optional)"
          />
          <input
            className="px-6 py-2 border sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            type="number"
            name=""
            id=""
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
          />
          <textarea
            className="px-6 py-2 border  sm:w-3/4 w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer"
            name=""
            id=""
            cols=""
            rows=""
            value={addNote}
            onChange={(e) => setAddNote(e.target.value)}
            placeholder="Add a note (Optional)"
          ></textarea>
          <div className="relative w-full">
            <input
              type="text"
              readOnly
              placeholder="Claim GST? (Optional)"
              required
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
                        value={true}
                        onChange={() => handleOptionSelect(true)}
                        className="mr-2 inputpnr"
                      />
                    </label>
                    <label className="flex items-center justify-between py-2">
                      No
                      <input
                        type="radio"
                        name="confirm"
                        value={false}
                        onChange={() => handleOptionSelect(false)}
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
            <p className="text-[#DE4D11] font-bold ">₹{totalPrice}</p>
          </div>
          <div className="sm:w-3/4 w-11/12">
            <h3 className="text-justify mb-0 text-black font-bold px-4 py-4 mt-2">
              Bill Details
            </h3>
            {cart.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-between items-start px-4 py-3"
              >
                <div>
                  <h4 className="text-left w-full text-black font-bold text-lg mb-0">
                    {item.food_name} x {item.quantity}
                  </h4>
                  <p className="font-bold mb-0 text-gray-400 pb-2 text-justify">
                    {item.description}
                  </p>
                </div>
                <p className="text-[#de4d11] mb-0 font-bold text-lg">
                  ₹{item.quantity * item.selling_price}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border-t border-gray-300 x-4 sm:w-3/4 w-11/12">
            <div className="d-flex justify-between items-center px-4 py-2">
              <h4 className="text-black font-bold text-lg mb-0 py-2 text-left">
                Item Total
              </h4>
              <p className="text-[#de4d11] mb-0 font-bold text-lg">
                {totalQuantity}
              </p>
            </div>
            <div className="d-flex justify-between items-center px-4 py-2">
              <h4 className="text-black font-bold text-lg mb-0 py-2 text-left">
                Restaurant Handing Charges
              </h4>
              <p className="text-[#de4d11] mb-0 font-bold text-lg">₹00.00</p>
            </div>
            <div className="d-flex justify-between items-center px-4 py-2">
              <h4 className="text-black font-bold text-lg mb-0 py-2 text-left">
                Discount Applied (FREEISH)
              </h4>
              <p className="text-[#de4d11] mb-0 font-bold text-lg">₹20.00</p>
            </div>
            <div className="d-flex justify-between items-center px-4 py-2">
              <h4 className="text-black font-bold text-lg mb-0 py-2 text-left">
                Taxes
              </h4>
              <p className="text-[#de4d11] mb-0 font-bold text-lg">
                ₹{TaxPrice}
              </p>
            </div>
            <div className="d-flex justify-between items-center px-4 py-2">
              <h4 className="text-black font-bold text-lg mb-0 py-2 text-left">
                Final amount
              </h4>
              <p className="text-[#de4d11] mb-0 font-bold text-lg">
                ₹{TaxPrice + totalPrice}
              </p>
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
              name="paymentMethod"
              value="cod"
              required
              checked={selectedMethod === "cod"}
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
              name="paymentMethod"
              value="online"
              required
              checked={selectedMethod === "online"}
              onChange={handleMethodChange}
            />
          </label>
          {selectedMethod === "online" ? (
            <button
              type="submit"
              className="bg-[#DE4D11] p-2 m-4 w-2/4 rounded-full text-white font-semibold text-lg"
            >
              Proceed to pay
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#DE4D11] p-2 m-4 w-2/4 rounded-full text-white font-semibold text-lg"
            >
              Pay on delivery
            </button>
          )}

          <hr style={{ width: "50%", border: "2px solid black" }} />
        </div>
      </form>
    </section>
  );
};
export default Payment;
