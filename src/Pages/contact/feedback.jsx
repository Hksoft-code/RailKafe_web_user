import delicioustext from "../../Assets/delicioustext.png";
import items from "../../Assets/items.png";
import "./contact.css";
const Contactus = () => {
  return (
    <section className="mb-12">
      <h1 className="text-center font-bold text-3xl mt-4 mb-3">
        Feedback & Complaint
      </h1>
      <form action="">
        <div className="d-flex flex-col">
          <input
            className="m-3 text-lg p-3 text-gray-500 inputclass"
            type="text"
            placeholder="Name"
          />
          <input
            className="m-3 text-lg p-3 text-gray-500 inputclass"
            type="number"
            placeholder="Mobile Number"
          />
          <input
            className="m-3 text-lg p-3 text-gray-500 inputclass"
            type="text"
            placeholder="Add Message"
          />
          <input
            className="m-3 text-lg p-3 text-gray-500 inputclass"
            type="text"
            placeholder="Order Id"
          />
          <input
            className="m-3 text-lg p-3 text-gray-500 inputclass"
            type="text"
            placeholder="Add Message"
          />
          <button
            type="submit"
            className="px-2 my-4 mx-auto py-2 w-2/4 button1"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="uppermain2 ">
        <div className="d-flex items-center justify-around p-4 sm:p-12 ">
          <img className="w-2/4 sm:w-2/5" src={delicioustext} alt="Delicious" />
          <img className="w-1/2 sm:w-80" src={items} alt="tasty" />
        </div>
      </div>
    </section>
  );
};

export default Contactus;
