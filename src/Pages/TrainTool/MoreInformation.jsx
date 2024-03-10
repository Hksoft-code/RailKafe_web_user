import { SlCalender } from "react-icons/sl";

const MoreInformation = () => {
  return (
    <section className=" w-4/5 mx-auto">
      <h5 className="text-center font-bold text-4xl mt-4 mb-3">
        More Information
      </h5>
      <div className="d-flex bg-white shadow-md items-center m-4 p-4 other justify-start">
        <SlCalender className="text-orange-500 w-6 m-2  h-6"/>{" "}
        <a href="/" className="no-underline text-xl text-gray-500">
          Check Train Time Table
        </a>
      </div>
      <div className="d-flex bg-white shadow-md items-center m-4 p-4 other justify-start">
        <SlCalender className="text-orange-500 w-6 m-2  h-6"/>{" "}
        <a href="/" className="no-underline text-xl text-gray-500">
          Check Platform Locator
        </a>
      </div>
      <div className="d-flex bg-white shadow-md items-center m-4 p-4 other justify-start">
        <SlCalender className="text-orange-500 w-6 m-2  h-6"/>{" "}
        <a href="/" className="no-underline text-xl text-gray-500">
          Check PNR Status
        </a>
      </div>
      <div className="d-flex bg-white shadow-md items-center m-4 p-4 other justify-start">
        <SlCalender className="text-orange-500 w-6 m-2  h-6" />{" "}
        <a href="/" className="no-underline text-xl text-gray-500">
          Online Order food in your Journey
        </a>
      </div>
    </section>
  );
};

export default MoreInformation;
