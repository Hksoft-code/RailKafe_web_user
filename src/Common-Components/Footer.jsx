import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { PiBirdBold } from "react-icons/pi";
const Footer = () => {
  return (
    <div>
      <footer className=" bg-gray-200 bg-opacity-20 py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between mx-2 sm:mx-0 sm:px-48">
          <div className="flex flex-col items-start  my-4">
            <h4 className="text-black">Company</h4>
            <Link to="/about-railkafe" className="text-gray-500 no-underline">
              About Us
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Term & Conditions
            </Link>
            <Link to="/privacy-policy" className="text-gray-500 no-underline">
              Privacy Policy
            </Link>
            <Link
              to="/cancellation-policy"
              className="text-gray-500 no-underline"
            >
              Cancellation & Refund policy
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Shipping policy
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Quality Assurance
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Disclaimer
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Sitemap
            </Link>
          </div>
          <div className="flex flex-col items-start my-4">
            <h4 className="text-black">Help & Support </h4>
            <Link to="/" className="text-gray-500 no-underline">
              Track Order
            </Link>
            <Link to="/offer" className="text-gray-500 no-underline">
              Offers
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              {" "}
              Callback Request
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Cancellation Request
            </Link>
            <Link to="/feedback" className="text-gray-500 no-underline">
              Feedback/Complaint
            </Link>
            <Link to="/contactus" className="text-gray-500 no-underline">
              Contact
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Become A Partner
            </Link>
          </div>
        </div>
        <hr className="w-90 mx-auto" />
        <div className="flex flex-col sm:flex-row items-start justify-between mx-2 sm:mx-0 sm:px-48">
          <div className="flex flex-col items-start my-4 ">
            <h4 className="text-black">Other Links </h4>
            <Link to="/" className="text-gray-500 no-underline">
              Order Food in Train{" "}
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Customer Reviews
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Pure Veg Food
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Non Veg Food
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              Jain Food
            </Link>
            <Link to="/" className="text-gray-500 no-underline">
              RailKafe Blog
            </Link>
          </div>
          <div className="flex flex-col items-start my-4 ">
            <h4 className="text-black">Connect with us </h4>
            <Link to="/" className="text-gray-500 no-underline d-flex items-center ">
              <FaFacebook className="mr-2"/> Facebook
            </Link>
            <Link to="/" className="text-gray-500 no-underline d-flex items-center ">
              <FaXTwitter className="mr-2"/> Twitter/X
            </Link>
            <Link to="/" className="text-gray-500 no-underline d-flex items-center ">
              <FaInstagram className="mr-2"/> Instagram
            </Link>
            <Link to="/" className="text-gray-500 no-underline d-flex items-center ">
              <FaPinterestP className="mr-2"/> Pinterest
            </Link>
            <Link to="/" className="text-gray-500 no-underline d-flex items-center ">
              <FaLinkedinIn className="mr-2"/> Linkedin
            </Link>
            <Link to="/" className="text-gray-500 no-underline d-flex items-center ">
              <FaSquareThreads className="mr-2"/> Thread
            </Link>
            <Link to="/" className="text-gray-500 no-underline d-flex items-center ">
              <PiBirdBold className="mr-2"/> Koo
            </Link>
          </div>
        </div>
      </footer>
      <div className=" bg-black pb-5 ">
        <div className="justify-center  p-4 rounded-lg flex items-center">
          <p className="text-white">
            Copyright &copy; 2023-2024 RESTORNIA PRIVATE LIMITED. All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
