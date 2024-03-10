import delicioustext from "../../Assets/delicioustext.png";
import items from "../../Assets/items.png";
import allfood from "./../../Assets/Shutterstock_1675475479-removebg-preview 1.png";
import { BsCheck2All } from "react-icons/bs";
import { ImCross } from "react-icons/im";
const Myorder = () => {
  let Ordersuccessful = true;
  return (
    <section className="mb-24">
      <h1 className="text-center text-gray-600 font-bold my-3 mx-auto ">
        My Orders
      </h1>
      <div className="uppermain2 ">
        <div className="d-flex items-center justify-around p-4 sm:p-12">
          <img className="w-2/4 sm:w-2/5" src={delicioustext} alt="Delicious" />
          <img className="w-1/2 sm:w-80" src={items} alt="tasty" />
        </div>
      </div>
      <h2 className="text-center text-gray-500 font-bold mt-5 my-3 mx-auto text-3xl">
        Order History
      </h2>
      <div className="my-6">
        <div className="border-2 border-gray-500 border-opacity-50 rounded-xl mx-4">
          <div className=" d-flex sm:flex-row flex-col justify-start items-center sm:p-4 sm:m-4">
            <img src={allfood} alt="" />
            <div className="flex flex-col items-center sm:items-start sm:mt-0 mt-2 justify-between">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 font-semibold text-lg  mb-0 ">
                  3 Items
                </p>{" "}
                <p className="text-gray-400 font-semibold text-xl mb-0">
                  #264100
                </p>
              </div>
              <h2 className="text-gray-600 font-bold text-3xl">
                Hotel Guru Kripa
              </h2>
              <p className="text-gray-400 font-semibold text-lg ">
                ₹17{" "}
                <span className="text-[#DE4E12] font-semibold text-lg ">
                  (visa)
                </span>
              </p>
            </div>
          </div>
          <div
            className={`p-2 rounded-lg ${
              Ordersuccessful ? "bg-[#61C260]" : "bg-[#DF5319]"
            } flex items-center px-4`}
          >
            {Ordersuccessful ? (
              <BsCheck2All className="text-3xl text-white mx-4" />
            ) : (
              <ImCross className="text-3xl text-white mx-4" />
            )}{" "}
            <div>
              <p className="font-bold text-white mb-0">Order Successful</p>
              <span className="text-white">Dec, 23,2023, 6:55</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="border-2 border-gray-500 border-opacity-50 rounded-xl mx-4">
          <div className=" d-flex sm:flex-row flex-col justify-start items-center sm:p-4 sm:m-4">
            <img src={allfood} alt="" />
            <div className="flex flex-col items-center sm:items-start sm:mt-0 mt-2 justify-between">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 font-semibold text-lg  mb-0 ">
                  3 Items
                </p>{" "}
                <p className="text-gray-400 font-semibold text-xl mb-0">
                  #264100
                </p>
              </div>
              <h2 className="text-gray-600 font-bold text-3xl">
                Hotel Guru Kripa
              </h2>
              <p className="text-gray-400 font-semibold text-lg ">
                ₹17{" "}
                <span className="text-[#DE4E12] font-semibold text-lg ">
                  (visa)
                </span>
              </p>
            </div>
          </div>
          <div
            className={`p-2 rounded-lg ${
              Ordersuccessful === false ? "bg-[#61C260]" : "bg-[#DF5319]"
            } flex items-center px-4`}
          >
            {Ordersuccessful === false ? (
              <BsCheck2All className="text-3xl text-white mx-4" />
            ) : (
              <ImCross className="text-3xl text-white mx-4" />
            )}{" "}
            <div>
              <p className="font-bold text-white mb-0">Order Cancel</p>
              <span className="text-white">Dec, 23,2023, 6:55</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="border-2 border-gray-500 border-opacity-50 rounded-xl mx-4">
          <div className=" d-flex sm:flex-row flex-col justify-start items-center sm:p-4 sm:m-4">
            <img src={allfood} alt="" />
            <div className="flex flex-col items-center sm:items-start sm:mt-0 mt-2 justify-between">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 font-semibold text-lg  mb-0 ">
                  3 Items
                </p>{" "}
                <p className="text-gray-400 font-semibold text-xl mb-0">
                  #264100
                </p>
              </div>
              <h2 className="text-gray-600 font-bold text-3xl">
                Hotel Guru Kripa
              </h2>
              <p className="text-gray-400 font-semibold text-lg ">
                ₹17{" "}
                <span className="text-[#DE4E12] font-semibold text-lg ">
                  (visa)
                </span>
              </p>
            </div>
          </div>
          <div
            className={`p-2 rounded-lg ${
              Ordersuccessful ? "bg-[#61C260]" : "bg-[#DF5319]"
            } flex items-center px-4`}
          >
            {Ordersuccessful ? (
              <BsCheck2All className="text-3xl text-white mx-4" />
            ) : (
              <ImCross className="text-3xl text-white mx-4" />
            )}{" "}
            <div>
              <p className="font-bold text-white mb-0">Order Successful</p>
              <span className="text-white">Dec, 23,2023, 6:55</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myorder;
