import { useState } from "react";
import Group from "./../../Assets/top-banner-food 1.png";
import { getCheckPnr } from "./service/TrainToolsServices.jsx";
import FAQs from "./../Faqsection/FAQ.jsx";
const CheckPNR = () => {
  const [pnrNumber, setPnrNumber] = useState("");
  console.log("pnr", pnrNumber);
  // const [pnrDetails, setPnrDetails] = useState(null)
  const getCheck_Pnr = async (e) => {
    e.preventDefault();
    try {
      const response = await getCheckPnr(pnrNumber);
      const pnr = response?.data.data;
      // setPnrDetails(pnrDetails);
      console.log("pnrdetail",pnr);
      console.log("restaurant info response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
  return (
    <section className="mb-24">
      <img src={Group} alt="" />
      <h1 className="text-center font-bold text-4xl mt-4 mb-3">
        CHECK PNR STATUS
      </h1>
      <form onSubmit={getCheck_Pnr} className="my-2">
        <input
          placeholder="Enter PNR Number"
          className="inputpnr mx-3"
          type="text"
          value={pnrNumber}
          onChange={(e) => {
            setPnrNumber(e.target.value);
          }}
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
        simple and easy for our customers.Just enter your 10-digit PNR number in
        the box above to know the latest status.
      </p>
      <h1 className="text-center font-bold text-4xl mt-4 mb-3">
        CHECK PNR STATUS
      </h1>
      <div>
        <h5 className="w-4/5 text-justify mx-auto font-bold">What is PNR?</h5>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          PNR stands for Passenger Name Record. It is a unique identification
          ten-digit number that helps passengers find the status of their
          railway ticket. It also helps railway officials prepare reservation
          charts and identify passengers. This information is maintained by the
          Centre for Railway Information Systems (CRIS) along with Live train
          PNR Status and availability of berths in all classes for the next 60
          days. This PNR number is allocated to all passengers who have booked a
          railway ticket either online or offline from railway reservation
          counters. It has all important journey details and passenger
          information including their name, age, and gender. How to check PNR
          Status Online
        </p>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          To check reservation status of your waitlisted or RAC train ticket
          PNR, you can follow the easy steps mentioned below.
        </p>
        <ul className="list-disc text-justify w-4/5 mx-auto text-xl text-gray-500">
          <li className="w-9/10">
            Step 1 – Note or copy your ten-digit PNR number which is generally
            on the top left side of your ticket.
          </li>
          <li className="w-9/10">
            Step 2 –Go to the PNR check page on Zoop website.
          </li>
          <li className="w-9/10">
            Step 3 –Type or paste your PNR number in the search box and click on
            submit button.
          </li>
          <li className="w-9/10">
            Step 4 –You will see details of current reservation status of your
            train journey.
          </li>
          <li className="w-9/10">
            Indian Railways PNR Number Abbreviations or Short Codes
          </li>
        </ul>
      </div>
      <div>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          Indian Railways is one of the largest railway networks in the world
          and serves millions of passengers daily. Therefore, understanding of
          the various short codes or abbreviations used in a train ticket
          becomes very important. Here, you will find list of all major short
          codes and their meanings.
        </p>
        <ol className="list-decimal text-justify w-4/5 mx-auto text-xl text-gray-500">
          <li className="w-9/10">
            WL – Waitlist: If a passenger’s ticket is not confirmed, then they
            are allotted a waitlist number. Example – If your PNR number is WL
            4, then it means you are the fourth passenger in the waiting list.
          </li>
          <li className="w-9/10">
            RAC – Reservation Against Cancellation: If a passenger’s ticket is
            not confirmed but a seat is allotted on sharing basis under the RAC
            quota, then the PNR status shows RAC followed by a number. Example –
            If your PNR number is RAC 5, then it means you are the fifth
            passenger with a RAC ticket, and you’ll be allotted a shared seat on
            or before chart preparation.
          </li>
          <li className="w-9/10">
            CNF – Confirmed: If a passenger’s reservation status is confirmed,
            then the PNR will show CNF. Confirmed tickets have a seat & coach
            number allotted to them. Example – If your PNR status shows CNF B4
            31, then it means your ticket is confirmed and you’ve been allotted
            seat number 31 in B4 coach of the train.
          </li>
          <li className="w-9/10">
            CK – Tatkal Quota: Tatkal Quota is forpassengers who need confirm
            tickets in short notice. Tickets booked under the tatkal reservation
            facility show CK mentioned on them. Waiting List Tickets Status
            Meaning & Confirmation Chances
          </li>
          <li className="w-9/10">
            GNWL – General Waiting List: These waiting list have the highest
            chances of getting a confirmed ticket.
          </li>
          <li className="w-9/10">
            CKWL – Tatkal Waiting List: These waiting list ticket code is
            mentioned for tatkal quota bookings and their confirmation chances
            are slightly less than GNWL.
          </li>
          <li className="w-9/10">
            RLWL – Remote Location Waiting List: This is the third category in
            wait listed tickets and is meant for remote locations where there
            may be not many trains or seats available, and their confirmation
            chances are less than GNWL and RLWL.
          </li>
          <li className="w-9/10">
            PQWL – Pooled Quota Waiting List: Waiting list quota is created when
            several stations share the same reservation quota. Chances of PQWL
            status getting confirmed are generally less as it is divided between
            many stations.
          </li>
          <li className="w-9/10">
            RLGN – Remote Location General Waiting: This waiting list code is
            allotted to general quota tickets and is similar to RLWL. These
            tickets normally have less chances of confirmation.
          </li>
          <li className="w-9/10">
            RQWL – Request Waiting List: This code is shown on tickets where
            passengers have opted for a specific seat or berth which was not
            available at the time of bookings. These tickets have a tough chance
            of getting confirmed as it is subject to availability of a specific
            seat / berth desired by the passenger.
          </li>
          <li className="w-9/10">
            RSWL – Roadside Station Waiting List: This ticket is specific to
            smaller stations and generally have less chances of getting
            confirmed.
          </li>
        </ol>
        <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
          Modes of PNR Inquiry and How Does it Work? <br />
          Indian Railways and IRCTC provide various modes for passengers to
          check their ticket’s PNR status.
        </p>
        <ol className="list-decimal text-justify w-4/5 mx-auto text-xl text-gray-500">
          <li className="w-9/10">
            Online PNR Status Inquiry: Passengers can check their PNR status
            online by visiting the official Indian Railways Website or IRCTC’s
            official aggregator Zoop’ Website or Zoop Android or iOS App.
          </li>
          <li className="w-9/10">
            SMS Based PNR Inquiry: Passengers can send SMS to 139 to check PNR
            status on SMS. Passenger’s need to simply type PNR, followed by
            their 10-digit PNR after a space to get the latest information.
          </li>
          <li className="w-9/10">
            IVRS Based PNR Information: Passengers can call IRCTC customer care
            number 139 to check their ticket PNR status. The Interactive Voice
            Response System (IVRS) guides passengers with necessary steps to
            fetch the PNR information.
          </li>
          <li className="w-9/10">
            PNR Status on WhatsApp:WhatsApp PNR Check service is the latest
            online medium to obtain the current status of train tickets. This
            innovative service has revolutionized the way passengers inquire
            about their train tickets. Passengers can simply chat with Zoop
            WhatsApp number 7042062070 and receive real-time information about
            their train ticket PNR number with the convenience of their
            smartphone.
          </li>
        </ol>
      </div>
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

export default CheckPNR;
