import PropTypes from "prop-types"; // Import PropTypes
import { RxCross2 } from "react-icons/rx";
import Railkafe from "./../../Assets/railkafelogo.png";
import { MdHome } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, toggleDrawer }) => {
  const handleItemClick = () => {
    // Call the toggleDrawer function to hide the drawer
    toggleDrawer();
  };
  return (
    <div className="">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 sm:w-3/4 w-full mx-auto h-full"></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#ededed] overflow-auto z-50 shadow transform transition-transform ${
          isOpen ? "sm:translate-x-2/4 translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <img src={Railkafe} className="w-7/12" alt="" />
          <button onClick={toggleDrawer}>
            <RxCross2 className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
          </button>
        </div>
        <div className="my-4">
          <h5 className="text-black font-semibold text-justify px-3">Profit</h5>
          <div className="d-flex flex-col">
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/myprofile"
              onClick={handleItemClick}
            >
              <MdHome className=" text-xl mx-2 font-semibold" />
              My Profile
            </Link>
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/myorders"
              onClick={handleItemClick}
            >
              <BsBasket className=" text-xl mx-2 font-semibold" />
              My Orders
            </Link>{" "}
          </div>
        </div>
        <div>
          <h5 className="text-black font-semibold text-justify px-3">
            Other Services
          </h5>
          <div className="d-flex flex-col">
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/book-group-order"
              onClick={handleItemClick}
            >
              <FaUserGroup className=" text-xl mx-2 font-semibold" />
              Group Orders
            </Link>{" "}
          </div>
        </div>
        <div className="my-4">
          <h5 className="text-black font-semibold text-justify px-3">
            Help & Support
          </h5>
          <div className="d-flex flex-col ">
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/contactus"
              onClick={handleItemClick}
            >
              <HiPhone className=" text-xl mx-2 font-semibold" />
              Contact Us
            </Link>
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/feedback"
              onClick={handleItemClick}
            >
              <GrNotes className=" text-xl mx-2 font-semibold" />
              Feedback
            </Link>{" "}
          </div>
        </div>
        <div className="my-4">
          <h5 className="text-black font-semibold text-justify px-3">
            About RailKafe
          </h5>
          <div className="d-flex flex-col">
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/about-railkafe"
              onClick={handleItemClick}
            >
              <FcAbout className=" text-xl mx-2 font-semibold" />
              About Us
            </Link>
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/faq"
              onClick={handleItemClick}
            >
              <SlCalender className=" text-xl mx-2 font-semibold" />
              FAQ
            </Link>{" "}
            <Link
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/privacy-policy"
              onClick={handleItemClick}
            >
              <SlCalender className=" text-xl mx-2 font-semibold" />
              Privacy Policy
            </Link>{" "}
            <Link
              className="py-3 px-2 my-1 bg-white no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              to="/cancellation-policy"
              onClick={handleItemClick}
            >
              <SlCalender className=" text-xl mx-2 font-semibold" />
              Cancellation Policy
            </Link>{" "}
          </div>
        </div>
        <div className="my-4">
          <h5 className="text-black font-semibold text-justify px-3">
            Contact Us
          </h5>
          <div className="d-flex flex-col">
            <a
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              href="tel:+91335503023"
            >
              <HiPhone className=" text-xl mx-2 font-semibold" />
              +91335503023
            </a>
            <a
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              href="mailto:contact@railkafe.com"
            >
              <CiMail className=" text-xl mx-2 font-semibold" />
              contact@railkafe.com
            </a>{" "}
            <a
              className="py-3 px-2 my-1 bg-white  no-underline d-flex justify-start items-center text-gray-600 font-semibold"
              href="https://wa.me/+91335503023"
            >
              <FaWhatsapp className=" text-xl mx-2 font-semibold" />
              +91335503023
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add prop types validation
Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Drawer;
