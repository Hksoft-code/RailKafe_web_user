import { useState } from "react";
import Group from "./../../Assets/l-intro-1687366083 1.png";
import { useNavigate } from "react-router-dom";
import MoreInformation from "./MoreInformation.jsx";
import "./Grouporder.css";
import FAQs from "./../Faqsection/FAQ.jsx";

const CoachPosition = () => {
  const navigate = useNavigate();

  const [trainNumber, setTrainNumber] = useState("");
  const handleSubmitTrainNumber = (event) => {
    event.preventDefault();
    navigate(`/order-food/${trainNumber}`);
  };
  const handleTrainNumberChange = (event) => {
    setTrainNumber(event.target.value);
  };

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
  return (
    <section className="mb-24">
      <img className="mx-auto" src={Group} alt="" />
      <h1 className="text-center font-bold text-4xl mt-4 mb-3">
        CHECK COACH POSITION
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
        Coach position of a train means the sequence number of a train coach
        from the engine. Knowing coach position in advance helps you position
        yourself at the right place on railway platform. You can check train
        coach position at Zoop quickly. Just enter the train name or number in
        the box below to see the results. You can also order food for your train
        journey online by following the link here.
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

export default CoachPosition;
