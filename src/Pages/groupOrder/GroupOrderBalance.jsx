import { FaGift } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
const GroupOrderBalance = () => {
  return (
    <section className="mb-24">
      <div className="bg-[#E57141] p-10 d-flex items-center justify-center flex-col mb-12">
        <p className="font-semibold text-[#FFFFFF] text-xl mb-0">
          Your Balance
        </p>
        <h1 className="text-white my-4 ">INR 8,500.00</h1>
        <p className="font-bold text-[#FFFFFF] text-lg mb-4">
          Your total balance is worth ₹4.342
        </p>
        <p className="font-semibold text-[#FFFFFF] text-base mb-4">
          You can use up to ₹25 on every order above ₹299 with this balance (not
          application with any other promotion)
        </p>
      </div>
      <div className="d-flex items-center justify-between p-6 my-4 shadow-custom sm:px-12 px-2 sm:mx-12 mx-4 rounded-xl">
        <div className="d-flex items-center justify-center w-max">
          <FaGift className="text-[#de4d11] text-3xl m-2" />{" "}
          <p className="mb-0 text-black font-semibold text-lg">
            Refer your friend to earn More
          </p>
        </div>
        <IoIosArrowForward />
      </div>
      <div className="d-flex items-center justify-between p-6 my-4 shadow-custom sm:px-12 px-2 sm:mx-12 mx-4 rounded-xl">
        <div className="d-flex items-center justify-center">
          <GrTransaction className="text-[#de4d11] text-3xl m-2" />{" "}
          <p className="mb-0 text-black font-semibold text-lg">
            Transaction Logs
          </p>
        </div>
        <IoIosArrowForward />
      </div>
    </section>
  );
};

export default GroupOrderBalance;
