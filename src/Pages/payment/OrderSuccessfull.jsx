import { useNavigate } from "react-router-dom";
import Order from "./../../Assets/icon-park-outline_success.png";
const OrderSuccessfull = () => {
  const navigate = useNavigate();
  const handlesubmit = () => {
    navigate("/viewcart");
  };
  return (
    <section className="d-flex flex-col justify-center items-center">
      <img src={Order} className="my-5" alt="" />
      <h3>Order Successful</h3>
      <p className="my-2 text-gray-400 text-lg font-semibold">
        Your Order has successfully been placed. Seat back and wait of tte
        order!
      </p>
      <button
        onClick={handlesubmit}
        className="py-2 px-5 m-2 sm:w-1/4 w-3/4 bg-[#DE4D11] text-white  font-semibold border-2 border-[#DE4D11] rounded-full"
      >
        Done
      </button>
      <button className="py-2 px-5 m-2 sm:w-1/4 w-3/4  text-gray-600 border-2 font-semibold  border-gray-600 rounded-full">
        Get Coin Reward
      </button>
    </section>
  );
};

export default OrderSuccessfull;
