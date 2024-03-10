import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Modal1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className=""></div>
      <div className="">
        <div className="">
          <RxCross2 className="close-btn" onClick={onClose} />
          <h2>Modal 1 Content</h2>
        </div>
      </div>
    </div>
  );
};
Modal1.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

const SearchRestaurant = () => {
  const [modal1Open, setModal1Open] = useState(false);

  const handleInputClick = () => {
    setModal1Open(true);
  };

  const handleCloseModal1 = () => {
    setModal1Open(false);
  };
  const dummyData = [
    { id: 1, trainName: "12801 / Purushottam Express" },
    { id: 2, trainName: "12802 / Purushottam Express" },
    { id: 3, trainName: "12803 / Purushottam Express" },
    { id: 4, trainName: "12804 / Purushottam Express" },
    { id: 5, trainName: "12805 / Purushottam Express" },
  ];
  return (
    <section className="mb-24">
      <div className="flex items-center justify-between my-4 mx-auto sm:w-7/12 w-11/12">
        <h2 className="text-black text-xl font-semibold">Search Restaurant</h2>
        <RxCross2 className="text-xl mb-0" />
      </div>
      <form
        action=""
        className="flex items-center justify-between mx-auto sm:w-7/12 w-11/12"
      >
        <input
          className="border-3 border-solid border-gray-300 p-3 text-gray-500 rounded-lg w-full"
          type="text"
          name=""
          id=""
          placeholder="Search by Train number"
          onClick={handleInputClick}
        />
        <button className="button1 p-3">Search</button>
      </form>
      <p className="font-bold text-gray-500 my-4 text-lg text-justify sm:w-7/12 w-11/12 mx-auto">
        Recently Search
      </p>
      <div className="">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3 sm:w-7/12 w-11/12 mx-auto my-4 border-b border-gray-300"
          >
            <p className="text-lg text-gray-500">{item.trainName}</p>
            <FaExternalLinkAlt className="text-xl" />
          </div>
        ))}
      </div>
      <Modal1 isOpen={modal1Open} onClose={handleCloseModal1} />
    </section>
  );
};

export default SearchRestaurant;
