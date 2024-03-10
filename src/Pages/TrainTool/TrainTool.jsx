import { FaUserGroup } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";
import { BsCalendar2MinusFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { Link } from "react-router-dom";
const TrainTool = () => {
  return (
    <section className="pb-10 sm:pb-2 mb-24">
      <div className="flex flex-wrap justify-center sm:px-60 px-4  ">
        <div className="bg-green-600 h-1/4 sm:w-1/4 w-full  p-8 m-8 d-flex items-center flex flex-col rounded-xl">
          <FaUserGroup className="text-white w-12 h-8 m-3" />
          <Link to="/group-order" className="text-white text-xl no-underline">
            Group Order
          </Link>
        </div>
        <div className="bg-red-600 h-1/4 sm:w-1/4 w-full  p-8 m-8 d-flex items-center flex flex-col rounded-xl">
          <FaMoneyCheck className="text-white w-12 h-8 m-3" />
          <Link to="/check-pnr" className="text-white text-xl no-underline">
            PNR Check
          </Link>
        </div>
        <div className="bg-gray-500 h-1/4 sm:w-1/4 w-full  p-8 m-8 d-flex items-center flex flex-col rounded-xl">
          <BsCalendar2MinusFill className="text-white w-12 h-8 m-3" />
          <Link
            to="/check-train-timetable"
            className="text-white text-xl no-underline"
          >
            Train Schedule
          </Link>
        </div>
        <div className="bg-gray-900 h-1/4 sm:w-1/4 w-full  p-8 m-8 d-flex items-center flex flex-col rounded-xl">
          <FaSearch className="text-white w-12 h-8 m-3" />
          <Link
            to="/platform-locator"
            className="text-white text-xl no-underline"
          >
            Platform Locator
          </Link>
        </div>
        <div className="bg-blue-800 h-1/4 sm:w-1/4 w-full    p-8 m-8 d-flex items-center flex flex-col rounded-xl">
          <IoIosMan className="text-white w-12 h-8 m-3" />
          <Link
            to="/coach-position"
            className="text-white text-xl no-underline"
          >
            Coach Position
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainTool;
