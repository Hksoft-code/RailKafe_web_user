import { useState } from "react";
import { GetTrainNameList } from "./service/GetTrainName";
// import "./dashboard.css";
function CustomSelect() {
  const [trainNumber, setTrainNumber] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [listOpen, setListOpen] = useState(false);
  console.log("TrainNumber", trainNumber);
  console.log("searchResult", searchResults);
  const handleInputChange = (e) => {
    e.preventDefault();
    setTrainNumber(e.target.value);

    setListOpen(!listOpen); // Call a function to search for results whenever the input value changes
    searchResultsFunction(e.target.value);
  };

  const searchResultsFunction = async (trainNumber) => {
    try {
      // Perform a search based on the input value
      const response = await GetTrainNameList(trainNumber);
      console.log("response for train list", response?.data.data);
      const trainValue = response?.data.data;
      console.log("Train Value", trainValue);
      setSearchResults(trainValue?.train);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <>
      {/* <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div> */}
      <form
        onSubmit={searchResultsFunction}
        className="w-11/12 sm:w-2/5 mx-auto flex flex-col items-center"
      >
        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            list="trainNumbers"
            placeholder="Train Number"
            value={trainNumber}
            className="inputpnr w-full"
            required
            onChange={handleInputChange}
          />
          <button type="submit" className="button1">
            Submit
          </button>
        </div>
        {listOpen && (
          <ul className="mt-1 pl-0 w-10/12 bg-white border border-gray-300 rounded-md shadow-md">
            {searchResults.map((result) => (
              <li
                key={result.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setTrainNumber(result.train_number);
                  setListOpen(!listOpen); // Close the list after selection
                }}
              >
                {`${result.train_name} - ${result.train_number}`}
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}

export default CustomSelect;
