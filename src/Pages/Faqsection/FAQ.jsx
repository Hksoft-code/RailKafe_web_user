import PropTypes from "prop-types";
import "./FAQ.css";

const FAQs = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

FAQs.propTypes = {
  faq: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  toggleFAQ: PropTypes.func.isRequired,
};

export default FAQs;
