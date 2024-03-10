import { useState } from "react";
import Group from "./../../Assets/top-banner-food 1.png";
import FAQs from "./../Faqsection/FAQ.jsx";

import MoreInformation from "./MoreInformation.jsx";
import "./Grouporder.css";
import { useNavigate } from "react-router-dom";

const CheckTrainTT = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  const trainNumbersArray = ["12345", "67890", "24680", "13579", "98765"];
  const handleTrainNumberChange = (event) => {
    setTrainNumber(event.target.value);
  };
  const handleSubmitTrainNumber = (event) => {
    event.preventDefault();
    navigate(`/order-food/${trainNumber}`);
  };
  return (
    <section className="mb-24">
      <img src={Group} alt="" />
      <h1 className="text-center font-bold text-4xl mt-4 mb-3">
        CHECK PNR STATUS
      </h1>
      <div className="my-2">
        <form onSubmit={handleSubmitTrainNumber}>
          <input
            type="text"
            list="trainNumbers"
            placeholder="Enter Train Number"
            value={trainNumber}
            className="inputpnr mx-3"
            required
            onChange={handleTrainNumberChange}
          />
          <datalist id="trainNumbers">
            {trainNumbersArray.map((trainNumber, index) => (
              <option key={index} value={trainNumber} />
            ))}
          </datalist>
          <button type="submit" className="button1">
            Submit
          </button>
        </form>
      </div>
      <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
        Every train ticket in India has a unique 10-digit PNR number. It helps
        passengers know status of their ticket reservation. When you book a
        train ticket, it is possible that you might end up getting a waiting
        list number and not a confirm ticket. You can check PNR status here to
        know if your ticket is confirmed or not. The objective is to keep things
        simple and easy for our customers. Just enter your 10-digit PNR number
        in the box above to know the latest status.
      </p>
      <div>
        <h1 className="text-center font-bold text-4xl mt-4 mb-3">
          FAQS ON GROUP FOOD ORDERS IN TRAIN JOURNEYS?
        </h1>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQs faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <MoreInformation />
    </section>
  );
};

export default CheckTrainTT;
