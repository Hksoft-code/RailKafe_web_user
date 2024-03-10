import Group from "./../../Assets/group.png";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdTrain } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import "./grouporder.css";
import { useNavigate } from "react-router-dom";
const GroupOrder = () => {
  const navigate = useNavigate();
  const handlesubmit = () => {
    navigate("/balance-check");
  };
  return (
    <section className="mb-24 mt-12">
      <h2 className="text-center my-4 mx-auto text-black font-bold text-2xl ">
        Group order
      </h2>
      <div className="bg-[#5DCB6AFF] p-10 pb-40">
        <img
          src={Group}
          className="sm:w-4/12 w-10/12 absolute sm:left-[43%] left-[15%] sm:top-[22%] top-[25%]"
          alt=""
        />
      </div>
      <div className="mt-20 px-4">
        <h2 className="text-[#de4d11] text-justify my-3">
          Bulk Order for Group In Train Form
        </h2>
        <p className="text-gray-300 text-lg text-justify">
          Please fill this form to order food for groups inbulk quantity in
          train. We will get in touch with you with details and offers as per
          your journey plan.
        </p>
      </div>
      <form action="" className="px-4">
        <div className="d-flex items-center justify-center  border border-gray-400 my-4 rounded-xl">
          <IoMdPerson className="text-[#de4d11] text-3xl ml-3" />{" "}
          <input
            type="text"
            name=""
            id=""
            className="px-6 py-2   w-11/12 m-3 text-gray-600 text-lg cursor-pointer "
            placeholder=" Full Name"
          />
        </div>
        <div className="d-flex items-center justify-center  border border-gray-400 my-4 rounded-xl">
          <FaPhoneAlt className="text-[#de4d11] text-3xl ml-3" />{" "}
          <input
            type="number"
            name=""
            id=""
            className="px-6 py-2   w-11/12 m-3 text-gray-600 text-lg cursor-pointer "
            placeholder="Phone Number"
          />
        </div>
        <div className="d-flex items-center justify-center  border border-gray-400 my-4 rounded-xl">
          <IoMail className="text-[#de4d11] text-3xl ml-3" />{" "}
          <input
            type="email"
            name=""
            id=""
            className="px-6 py-2   w-11/12 m-3 text-gray-600  text-lg cursor-pointer "
            placeholder="Email Address"
          />
        </div>
        <div className="d-flex items-center justify-center border border-gray-400 my-4 rounded-xl">
          <IoMdTrain className="text-[#de4d11] text-3xl ml-3" />{" "}
          <input
            type="number"
            name=""
            id=""
            className="px-6 py-2   w-11/12 m-3 text-gray-600  text-lg cursor-pointer "
            placeholder="Enter PNR Number"
          />
        </div>
        <div className="d-flex items-center justify-center  border border-gray-400 my-4 rounded-xl">
          <HiMiniUserGroup className="text-[#de4d11] text-3xl ml-3" />{" "}
          <input
            className="px-6 py-2  w-11/12 m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer "
            type="number"
            name=""
            id=""
            placeholder="No. of passengers travelling"
          />
        </div>
        <input
          className="px-6 py-4  w-full border  mx-auto m-3 text-gray-600 border-gray-400 text-lg rounded-md cursor-pointer "
          type="text"
          name=""
          id=""
          placeholder="Your preferences (Ex, Thali, Biryani, Combos etc.)"
        />
        <button className="button1 w-3/4" onClick={handlesubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default GroupOrder;
