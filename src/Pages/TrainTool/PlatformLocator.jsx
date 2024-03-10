import  { useState } from "react";
import Group from "./../../Assets/l-intro-1687366083 1.png";

import FAQs from "./../Faqsection/FAQ.jsx";
import MoreInformation from "./MoreInformation.jsx";
const PlatformLocator = () => {
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
  return (
    <section className="mb-24">
      <img className="mx-auto" src={Group} alt="" />
      <h1 className="text-center font-bold text-4xl mt-4 mb-3">CHECK CHECK PLATFORM LOCATOR</h1>
      <form onSubmit={"handleSubmit"} className="my-2">
        <input
          placeholder="Enter PNR Number"
          className="inputpnr mx-3"
          type="text"
          required
        />
        <button type="submit" className="button1">
          Submit
        </button>
      </form>
      <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
        Every train ticket in India has a unique 10-digit PNR number. It helps
        passengers know status of their ticket reservation. When you book a
        train ticket, it is possible that you might end up getting a waiting
        list number and not a confirm ticket. You can check PNR status here to
        know if your ticket is confirmed or not. The objective is to keep things
        simple and easy for our customers. Just enter your 10-digit PNR number
        in the box above to know the latest status.
      </p>
      <h1 className="text-center font-bold text-4xl mt-4 mb-3">CHECK PNR STATUS</h1>
      <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
        Platform number of a train means the platform on which a train would
        arrive at every station. Every train has a specific platform number
        location on every station. You can check platform number position of
        your train here. Just enter train name of number in the box below to
        view the complete list. This number can change at the last minute
        without any prior notice.
      </p>
      <MoreInformation className="m-4" />
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
    </section>
  );
};

export default PlatformLocator;
