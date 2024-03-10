import { useState } from "react";
import Group from "./../../Assets/top-banner-food 1.png";
import Fixedbanner from "./../../Assets/fixedBanner 1.png";
import Food1 from "./../../Assets/l-intro-1687366083 1.png";
import Mobile from "./../../Assets/top--banner-food 1.png";
import Howworks from "./../../Assets/Howworks.png";
import GroupFood from "./../../Assets/banner31.png";
import { MdPerson } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import FAQs from "./../Faqsection/FAQ.jsx";
import "./Grouporder.css";

const GroupOrder = () => {
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
      <img src={Fixedbanner} alt="" />
      <h1 className="text-center font-bold text-4xl mt-4 mb-3">
        BULK ORDER FOR GROUPS IN TRAIN REQUEST FORM
      </h1>
      <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
        Please fill this form to order food for groups in bulk quantity in
        train. We will get in touch with you with details and offers as per your
        journey plan.
      </p>
      <form className="" action="">
        <div className=" mx-auto d-flex flex-wrap justify-center">
          <div className="formdata">
            <MdPerson />
            <input  type="text" placeholder="Full Name" />
          </div>
          <div className="formdata">
            <FaPhoneVolume />
            <input  type="number" placeholder="Phone Number" />
          </div>
          <div className="formdata">
            <IoMail />
            <input  type="email" placeholder="Email Address" />
          </div>
          <div className="formdata">
            <FaMoneyCheck />
            <input  type="number" placeholder="Enter PNR Number" />
          </div>
          <div className="formdata">
            <MdGroups />
            <input  type="number" placeholder="Number of Passenger travelling" />
          </div>
          <div className="formdata">
            <FaCalendarAlt />
            <input  type="date" placeholder="Enter Journey date" />
          </div>
        </div>
        <textarea
          className="formdata1 mx-auto "
          name=""
          id=""
          placeholder="Your preference (EX, Thali, Biryani)"
        ></textarea>

        <button className="button1 w-8/12 my-5">Sumbit</button>
      </form>
      <img src={Group} alt="" />
      <div>
        <h2 className="text-center font-bold text-4xl mt-4 mb-3">
          GROUP FOOD ORDER IN TRAIN
        </h2>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          A group train journey with your friends, family, or colleagues always
          promises a fun time together. With RailKafe you can make your train
          journey even more memorable when you order food on train in bulk. Bulk
          railway food order is one of our specialties and we have also been
          successfully catering to large online group food order in train from
          top restaurants. Download the RailKafe app today to avail discounts on
          your bulk train food orders.
        </p>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          Order bulk meal in train for a group by following these few steps -
        </p>
        <ul className="list-disc text-justify w-4/5 mx-auto text-xl text-gray-500">
          <li className="w-4/5">Enter your PNR number,</li>
          <li className="w-4/5">Enter the total number of passengers,</li>
          <li className="w-4/5">Choose the food preference from the menu,</li>
          <li className="w-4/5">Choose the restaurant and delivery station.</li>
        </ul>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          That’s it! Your bulk order food on train is done!! RailKafe services
          are available at 250+ stations covering all major trains running in
          India.
        </p>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          We take special care when groups from school, college, marriage
          parties, and official tours order food in train. We also undertake
          bulk railway food order and serve Satvik Bhojan for pilgrims on
          religious trips during devotional yatras. Get the best discounts and
          offers when you book bulk food order food in train at RailKafe
        </p>
        <div className="text-justify w-4/5 mx-auto text-xl text-gray-500 mb-24">
          <a className="no-underline text-gray-500" href="">
            Book Food Now{" "}
          </a>
          {"|"}
          <a className="no-underline text-gray-500" href="">
            Check Train Coach Position{" "}
          </a>
          {"|"}
          <a className="no-underline text-gray-500" href="">
            Check PNR Status
          </a>
        </div>
        <img className="mx-auto" src={Food1} alt="" />
        <div>
          <h2 className="text-center font-bold text-4xl mt-4 mb-3">
            BULK FOOD ORDERING ON TRAIN
          </h2>
          <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
            We take special care when groups from school, college, marriage
            parties, and official tours order bulk food delivery on train. We
            also undertake bulk railway food orders online to serve Satvik
            Bhojan for pilgrims on religious trips during devotional yatras. Get
            the best discounts and offers when you book bulk food order food in
            train at RailKafe.
          </p>
          <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
            To order bulk food booking on train journey you can call at +91
            801080 2222 or log on to our website for ordering. You can also book
            a call back for placing bulk meals for groups. RailKafe has even
            served food to large groups of more than 500 people in a single
            order in train journeys.
          </p>
          <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
            Ordering bulk meals on trains is in great demand during summer
            holidays, festivals, or wedding season. Just plan a day in advance
            to get food of personal choice for each member traveling.
          </p>
          <div className="text-justify w-4/5 mx-auto text-xl text-gray-500 mb-24">
            <a className="no-underline text-gray-500" href="/">
              Book Food Now{" "}
            </a>
            {"|"}
            <a className="no-underline text-gray-500" href="/">
              Check Train Coach Position{" "}
            </a>
            {"|"}

            <a className="no-underline text-gray-500" href="/">
              Check PNR Status
            </a>
          </div>
        </div>
        <img className="mx-auto" src={Mobile} alt="" />
        <div className="mb-12">
          <h1 className="text-center font-bold text-4xl mt-4 mb-3">HOW DOES GROUP FOOD ORDERING IN TRAIN WORKS?</h1>
          <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
            Railkafe is an authorized national aggregator for IRCTC e-Catering
            services in India delivering food on train to rail passengers. All
            restaurants displayed on RailKafe are approved by IRCTC and all
            delivery personnel carry a valid ID card indicating authenticity.
            RailKafe offers some of the best discounts and deals while placing a
            bulk order on a train journey. The only difference between a regular
            order and a bulk booking order is that passengers need to order the
            food, at least 24 hours in advance.
          </p>
          <h5 className="text-justify w-4/5 mx-auto">HOW DOES GROUP FOOD ORDERING IN TRAIN WORKS?</h5>
          <ul className="list-disc text-justify w-4/5 mx-auto text-xl text-gray-500">
            <li className="w-4/5">
              Fill up the online form with your journey details or call us at
              +91 801080 2222,
            </li>
            <li className="w-4/5">
              Choose the delivery station from the list provided online,
            </li>
            <li>
              Choose the restaurants from the list shared as per your choice of
              cuisine,
            </li>
            <li className="w-4/5">
              Place your order from the menu card of the chosen restaurant,
            </li>
            <li className="w-4/5">Apply discounts and offers on your order,</li>
          </ul>
        </div>
        <img className="mx-auto" src={GroupFood} alt="" />
        <div className="mainIRCTC1">
          <p className="text-center font-bold text-4xl mt-4 mb-3">HOW ONLINE TRAIN FOOD ORDERING WORKS</p>
        </div>
        <img
          className="mx-auto sm:px-4 px-2 h-40  sm:h-auto"
          style={{ borderRadius: "3.5rem" }}
          src={Howworks}
          alt=""
        />
        <div>
          <h1 className="text-center font-bold text-4xl mt-4 mb-3">FAQS ON GROUP FOOD ORDERS IN TRAIN JOURNEYS?</h1>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <FAQs faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupOrder;
