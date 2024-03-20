// import { useState } from "react";
// import { GetTrainNameList } from "./service/GetTrainName";
// import { useNavigate } from "react-router-dom";
// // import "./dashboard.css";
// function CustomSelect() {
//   const [trainNumber, setTrainNumber] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [ResultData, setResultData] = useState("");
//   console.log("result", ResultData);
//   const navigate = useNavigate();
//   const [listOpen, setListOpen] = useState(false);
//   console.log("TrainNumber", trainNumber);
//   console.log("searchResult", searchResults);
//   console.log("resultDataaaaaaaaaaaaaaa", ResultData);

//   localStorage.setItem("TrainNameNumber", JSON.stringify(ResultData));
//   const handleInputChange = (e) => {
//     e.preventDefault();
//     setTrainNumber(e.target.value);

//     setListOpen(!listOpen); // Call a function to search for results whenever the input value changes
//     searchResultsFunction(e.target.value);
//   };

//   const searchResultsFunction = async (trainNumber) => {
//     try {
//       // Perform a search based on the input value
//       const response = await GetTrainNameList(trainNumber);
//       console.log("response for train list", response?.data.data);
//       const trainValue = response?.data.data;
//       console.log("Train Value", trainValue);
//       setSearchResults(trainValue?.train);
//     } catch (error) {
//       console.error("Error searching:", error);
//     }
//   };

//   const handleSubmit = () => {
//     if (trainNumber) {
//       navigate(`/order-food/${trainNumber}`);
//     }
//   };

//   return (
//     <>
//       {/* <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Search..."
//         />
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>{result.name}</li>
//           ))}
//         </ul>
//       </div> */}
//       <form
//         onSubmit={searchResultsFunction}
//         className="w-11/12 sm:w-2/5 mx-auto flex flex-col items-center"
//       >
//         <div className="flex flex-row items-center justify-center w-full">
//           <input
//             type="text"
//             list="trainNumbers"
//             placeholder="Train Number"
//             value={ResultData || trainNumber}
//             className="inputpnr w-full"
//             required
//             onChange={handleInputChange}
//           />
//           <button
//             type="submit"
//             className="button1 my-4"
//             onClick={() => handleSubmit()}
//           >
//             Submit
//           </button>
//         </div>
//         {listOpen && (
//           <ul className="mt-1 pl-0 w-10/12 bg-white border border-gray-300 rounded-md shadow-md">
//             {searchResults.map((result) => (
//               <li
//                 key={result.id}
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => {
//                   setTrainNumber(result.train_number);
//                   setListOpen(!listOpen);
//                   setResultData(
//                     `${result.train_name} - ${result.train_number}`
//                   );
//                 }}
//               >
//                 {`${result.train_name} - ${result.train_number}`}
//               </li>
//             ))}
//           </ul>
//         )}
//       </form>
//     </>
//   );
// }

// export default CustomSelect;
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import BordingModal from "../Dashboard/BordingModal";
import PropTypes from "prop-types";
function CustomSelect(props) {
  const { allTrainDetails } = props;

  console.log("All Train Details get from dashboard", allTrainDetails);

  // const navigate = useNavigate();
  const [listOpen, setListOpen] = useState(false);
  const [trainData, setTrainData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [resultData, setResultData] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log(resultData);
    const trainData1 = allTrainDetails?.train;
    setTrainData(trainData1);
  }, [allTrainDetails]);
  console.log("train number", trainNumber);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (value) => {
    const filtered = trainData.filter((train) =>
      train.train_number.toString().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    // if (trainNumber) {
    //   navigate(`/order-food/${trainNumber}`);
    // }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-11/12 sm:w-2/5 mx-auto flex flex-col items-center"
      >
        <div className="flex flex-row items-center justify-center w-full">
          <input
            type="text"
            list="trainNumbers"
            placeholder="Train Number"
            value={resultData || inputValue}
            className="inputpnr w-full"
            required
            onChange={handleInputChange}
            onClick={() => {
              setListOpen(true);
            }}
          />
          <button
            type="submit"
            className="button1 my-4"
            // onClick={() => handleSubmit()}
          >
            Submit
          </button>
          {isModalOpen && <BordingModal trainNum={inputValue} />}
        </div>

        {listOpen && (
          <ul className="mt-1 pl-0 w-10/12 bg-white border border-gray-300 rounded-md shadow-md">
            {filteredData.map((train) => (
              <li
                key={train.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setTrainNumber(train.train_number);
                  setListOpen(!listOpen);
                  setResultData(`${train.train_name} - ${train.train_number}`);
                }}
              >
                {train.train_name} - {train.train_number}
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
CustomSelect.propTypes = {
  allTrainDetails: PropTypes.array.isRequired, // Example prop with array type
  // Define propTypes for other props here
};

export default CustomSelect;
