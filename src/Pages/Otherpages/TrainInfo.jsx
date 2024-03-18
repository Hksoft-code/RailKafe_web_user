import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const TrainInfo = ({ trainname, trainnumber }) => {
  const StartingPlace = "New Delhi";
  const TotalStations = "32";
  const EndPlace = "Puri";
  const StartingTime = "20:22";
  const EndTime = "24:00";
  console.log(trainnumber, trainname);
  return (
    <section className="mx-3 text-justify">
      <p>
        Now <Link to="">Order food in train</Link> on {trainname} {trainnumber}{" "}
        with RailKafe’s <Link to="">Food delivery in Train</Link> Service and
        get food at your train seat. Just follow these simple steps to order
        food in
        {trainname} {trainnumber}:
      </p>
      <ul className="list-decimal">
        <li>
          Visit RailKafe website or Download RailKafe train food delivery
          android app.
        </li>
        <li>
          The “Train No.” section is selected by default, just enter your train
          number then select your train from the suggest list and Click on
          “Search Restaurant” Button.
        </li>
        <li>
          Now you will see a list of stations and restaurants, chose your
          preferred restaurant and click on food menu.
        </li>
        <li>Now select your favourite food and proceed to payment page.</li>
        <li>Fill your journey details and select payment option.</li>
        <li>
          RailKafe has all the payment options available you can pay online
          through Credit Card, Debit Card, Net Banking, UPI or you can go with
          our Cash on delivery option as well.
        </li>
        <li>
          Rest assured you will get your food on train right at your seat.
        </li>
      </ul>
      <p>
        If you are traveling in {trainname} {trainnumber} and want to order food
        in train online for your train journey then yes, you are at the right
        website, RailKafe delivers food in {trainname} {trainnumber} at many
        stations. Whether you are traveling alone or in a group you can easily
        order food on {trainname} {trainnumber}. Group travellers can also order
        group food in train on {trainname} {trainnumber}. This Train originates
        form {StartingPlace} at its scheduled time {StartingTime} and has a
        total {TotalStations} stoppage and finally ends at {EndPlace} at{" "}
        {EndTime}. The list of stations where RailKafe is currently delivering
        food in train on {trainname} {trainnumber} are as follows:
      </p>
      <div>
        <p>
          <b>
            Q. How to book food in train {trainname} {trainnumber} online?
          </b>{" "}
          <br />
          You can book food for your train journey in {trainname} {trainnumber}
          train online through Railkafe website. <br />
          Here are the steps on how to book food on Railkafe:
        </p>
        <ul className="list-decimal">
          <li>
            Go to the Railkafe website or open the{" "}
            <Link to="/">Railkafe app</Link>.
          </li>
          <li>Enter the train number or PNR number or train name.</li>
          <li>
            Choose from the list of restaurant and food options available for
            the train.
          </li>
          <li>Proceed to checkout and pay for your order online or COD.</li>
        </ul>
      </div>
      <div>
        <p>
          <b>
            Q. How to book online food order in {trainname} {trainnumber} train?
          </b>{" "}
          <br />
          It is very simple to order food in train online for journey in
          {trainname} {trainnumber} train. <br />
          You can order tasty, hygienic, and affordable on seat food delivery in
          train by following the steps below: -
        </p>
        <ul className="list-decimal">
          <li>
            Visit the <a href="www.railkafe.com">www.railkafe.com</a>
          </li>
          <li>Enter Train Number or PNR Number.</li>
          <li>Choose your favorite restaurant from the list displayed.</li>
          <li>Select food items from the chosen restaurant’s menu.</li>
          <li>Enter your PNR and passenger contact details.</li>
          <li>You can pay online or via cash on delivery.</li>
          <li>
            As soon as the train arrives at the desired station, your order will
            be delivered to your seat.
          </li>
        </ul>
      </div>
      <div>
        <p>
          <b>
            Q. How to order a meal on train {trainname} {trainnumber} on call?
          </b>{" "}
          <br />
          Please call at +91 9771231434 to book a meal in {trainname}{" "}
          {trainnumber}
          train.
        </p>
      </div>
      <div>
        <p>
          <b>
            Q. Can I pay online for food order in train {trainname}{" "}
            {trainnumber}?
          </b>{" "}
          <br />
          Yes, online payment is possible for food order in Purushottam Exp
          12802 using various methods such as a debit card /credit card, net
          banking and UPI.
        </p>
      </div>
      <div>
        <p>
          <b>
            Q. How to <Link to="/group-order">order bulk food</Link> in{" "}
            {trainname} {trainnumber} train for groups online?
          </b>{" "}
          <br />
          Please follow steps mentioned below to order bulk food for groups
          travelling in {trainname} {trainnumber} train: -
        </p>
        <ul className="list-decimal">
          <li>Visit https://www.railkafe.com/group-order.</li>
          <li>Fill journey details in the form displayed.</li>
          <li>
            You will receive customized menu options as per your interest.
          </li>
          <li>
            You will get delivery in {trainname} {trainnumber} train coach at
            desired station.
          </li>
        </ul>
        <p>You can also call at +91 9771231434 to order bulk food in train. </p>
      </div>
      <div>
        <p>
          <b>
            Q. How to get <Link to="">Jain Food</Link> in train {trainname}{" "}
            {trainnumber}?
          </b>{" "}
          <br />
          At Railkafe you can get jain food in train {trainname} {trainnumber}.
          simply type Train Name or Train Number in the search box to order jain
          food in {trainname} {trainnumber}.
        </p>
      </div>
    </section>
  );
};

TrainInfo.propTypes = {
  trainname: PropTypes.string.isRequired,
  trainnumber: PropTypes.string.isRequired,
};

export default TrainInfo;
