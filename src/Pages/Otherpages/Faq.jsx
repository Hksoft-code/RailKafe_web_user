import { useState } from "react";
import FAQs from "../Faqsection/FAQ";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How to order food delivery on train online",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true,
    },
    {
      question: "Who delivers food to the customers?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question: "How do customers pay for orders online?",
      answer: "This many!",
      open: false,
    },
    {
      question: "Can customer cancel Orders?",
      answer: "This many!",
      open: false,
    },
    {
      question: "What if order fails?",
      answer: "This many!",
      open: false,
    },
    {
      question: "How do Railkafe ensure timely delivery?",
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
    <div className="mb-20">
      <h1 className="text-center font-bold text-3xl mt-4 mb-3">FAQS</h1>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQs faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
