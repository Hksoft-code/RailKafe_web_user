import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "./contact.css"
const Contactus = () => {
  return (
    <section className="mb-12">
      <h1 className="text-center font-bold text-3xl mt-4 mb-3">Contact Us</h1>
      <form action="">
        <div className="d-flex flex-col">
          <input className="m-3 text-lg p-3 text-gray-500 inputclass" type="text" placeholder="Name" />
          <input
            className="m-3 text-lg p-3 text-gray-500 inputclass"
            type="number"
            placeholder="Mobile Number"
          />
          <input className="m-3 text-lg p-3 text-gray-500 inputclass" type="text" placeholder="Add Message" />
          <button type="submit" className="px-2 mx-auto py-2 w-2/4 button1">
            Submit
          </button>
        </div>
      </form>
      <div className="d-flex my-4 justify-center">
        <div className="p-4 m-2 text-5xl rounded-lg bg-[#DE4D11] bg-opacity-10">
          <PiPhoneCallFill className="text-[#DE4D11]" />
        </div>
        <div className="p-4 m-2 text-5xl rounded-lg bg-[#1FAF38] bg-opacity-10">
          <IoLogoWhatsapp className="text-[#1FAF38]" />
        </div>
      </div>
      <iframe
        className="mx-auto my-8"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22170.439943397272!2d77.5922829695112!3d13.040322207341356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706783885730!5m2!1sen!2sin"
        width="360"
        height="200"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <div className="bg-gray-800 pb-8 d-flex flex-wrap justify-evenly w-full ">
        <div className="mt-2 mx-5 mb-2 p-3">
          <div className="d-flex items-center">
            <FaPhoneAlt className="text-white text-xl" />{" "}
            <p className="text-white mb-0">+91320940213</p>
          </div>
          <a href="/" className="text-white no-underline">
            Contact@railKafe.com{" "}
          </a>
        </div>
        <div className="mt-2 mx-5 mb-2 p-3">
          <div className="d-flex items-center">
            <FaPhoneAlt className="text-white text-xl" />{" "}
            <p className="text-white mb-0">+91320940213</p>
          </div>
          <a href="/" className="text-white no-underline">
            Contact@railKafe.com{" "}
          </a>
        </div>
        <div className="mt-2 mx-5 mb-2 p-3 ">
          <div className="d-flex items-center">
            <IoLocationSharp className="text-white text-xl" />{" "}
            <p className="text-white mb-0 ">
              33, B-4/33, Mohan Cooperative <br />
              Industrial Estate, New Delhi South, India
            </p>
          </div>
        </div>
        <div className="mt-2 mx-5 mb-2 p-3  ">
          <div className="d-flex items-center">
            <IoLocationSharp className="text-white text-xl" />{" "}
            <p className="text-white mb-0 ">
              33, B-4/33, Mohan Cooperative <br /> Industrial Estate, New Delhi
              South, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
