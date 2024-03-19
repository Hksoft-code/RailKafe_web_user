import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function CustomSelect(props) {
  const { allTrainDetails } = props;

  console.log("All Train Details get from dashboard", allTrainDetails);

  const navigate = useNavigate();
  const [listOpen, setListOpen] = useState(false);
  const [trainData, setTrainData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [resultData, setResultData] = useState("");
  const [trainNumber, setTrainNumber] = useState("");

  useEffect(() => {
    const trainData1 = allTrainDetails?.train;
    setTrainData(trainData1);
  }, [allTrainDetails]);

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

  const handleSubmit = () => {
    // if (trainNumber) {
    //   navigate(`/order-food/${trainNumber}`);
    // }
  };

  return (
    <>
      <form className="w-11/12 sm:w-2/5 mx-auto flex flex-col items-center">
        <div className="flex flex-row items-center justify-center w-full">
          <input
            type="text"
            list="trainNumbers"
            placeholder="Train Number"
            value={inputValue}
            className="inputpnr w-full"
            required
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="button1 my-4"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>

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
          {/* {searchResults.map((result) => (
              <li
                key={result.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setTrainNumber(result.train_number);
                  setListOpen(!listOpen);
                  setResultData(
                    `${result.train_name} - ${result.train_number}`
                  );
                }}
              >
                {`${result.train_name} - ${result.train_number}`}
              </li>
            ))} */}
        </ul>
      </form>
    </>
  );
}

export default CustomSelect;
