import Img1 from "./../../Assets/offer1 (1).jpg";
import Img2 from "./../../Assets/offer1 (1).webp";
import Img3 from "./../../Assets/offer1 (2).jpg";
import Img4 from "./../../Assets/offer1 (3).jpg";
import Img5 from "./../../Assets/offer1 (4).jpg";
import Img6 from "./../../Assets/offer1 (5).jpg";
import Img7 from "./../../Assets/offer1 (2).webp";
import FAQs from "../Faqsection/FAQ";
import { useState } from "react";
const BestOffer = () => {
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
      <div className="w-11/12 mx-auto flex sm:flex-row flex-col flex-wrap justify-evenly">
        <img src={Img1} className="my-4 mx-1 sm:w-1/4 w-full" alt="" />
        <img src={Img2} className="my-4 mx-1 sm:w-1/4 w-full" alt="" />
        <img src={Img3} className="my-4 mx-1 sm:w-1/4 w-full" alt="" />
        <img src={Img4} className="my-4 mx-1 sm:w-1/4 w-full" alt="" />
        <img src={Img5} className="my-4 mx-1 sm:w-1/4 w-full" alt="" />
        <img src={Img6} className="my-4 mx-1 sm:w-1/4 w-full" alt="" />
        <img src={Img7} className="my-4 mx-1 sm:w-1/4 w-full" alt="" />
      </div>
      <h1 className="my-3 text-center font-semibold text-3xl">
        Save Big with RailKafe Coupons and Offers
      </h1>
      <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
        The train journeys in India are unlike anything else, but the experience
        does not end there. With RailKafe&apos;s exclusive offers and coupons,
        your train travel can be accompanied by mouth-watering meals at
        incredible prices. Whether you&apos;re a frequent traveler or just
        embarking on a memorable train journey, RailKafe coupons, irresistible
        offers, and promo codes will delight your dining experience.
      </p>
      <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
        Get ready to savor sumptuous meals while keeping your wallet happy!
      </p>
      <div>
        <h3 className="text-justify text-2xl w-5/6 mx-auto text-black mb-3">
          RailKafe Coupons and Offers:
        </h3>
        <h4 className="text-justify text-xl w-5/6 mx-auto text-gray-500 ">
          Unlock Unbeatable Discounts:
        </h4>
        <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
          RailKafe&apos;s coupons and offers open doors to unbeatable discounts
          on your favorite food. From flat discounts to exciting cashback
          offers, we ensures that every bite is as delightful as the savings you
          make.
        </p>
        <h4 className="text-justify text-xl w-5/6 mx-auto text-gray-500 ">
          Irresistible Combo Deals:
        </h4>
        <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
          With RailKafe&apos;s combo deals, passengers can enjoy the perfect
          blend of deliciousness and affordability. Treat yourself to delectable
          meals curated to cater to all taste buds and preferences.
        </p>
        <h4 className="text-justify text-xl w-5/6 mx-auto text-gray-500 ">
          Seasonal Offers and Festive Delights:
        </h4>
        <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
          RailKafe keeps the celebrations alive with special seasonal offers and
          festive delights. Be it a special occasion or a festive holiday,
          RailKafe has offers that will add joy to your train journey.
        </p>
      </div>
      <h2 className="my-5 text-justify text-2xl w-5/6 mx-auto text-black ">
        How to Avail RailKafe Coupons and Offers:
      </h2>
      <div>
        <h3 className=" text-justify text-xl w-5/6 mx-auto text-black ">
          RailKafe App or Website:
        </h3>
        <ul className="list-decimal mb-5">
          <li className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            Download the RailKafe app or visit the website on any web browser.
          </li>
          <li className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            Navigate to the &quot;Offers&quot; or &quot;Coupons&quot; section.
          </li>
          <li className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            Browse through the latest deals and select the one that suits your
            preferences.{" "}
          </li>
          <li className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            Add your favorite meals to the cart and apply the coupon code during
            checkout to avail the discount.
          </li>
        </ul>
        <h3 className="text-justify text-xl w-5/6 mx-auto text-gray-600 ">
          Coupon Redemption at Stations:
        </h3>
        <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
          For passengers who prefer to place orders at the station, RailKafe
          also offers coupon redemption at select railway stations. Show your
          coupon code to the RailKafe team and enjoy discounts on your favorite
          meals.
        </p>
        <h2 className="my-5 text-justify text-2xl w-5/6 mx-auto text-black ">
          Terms and Conditions:
        </h2>
        <div>
          <h4 className="text-justify text-xl w-5/6 mx-auto text-gray-500 ">
            Expiry Dates:
          </h4>
          <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            RailKafe coupons and offers come with specific validity periods.
            Make sure to check the expiry dates of each offer to ensure you
            avail them before they expire.
          </p>
          <h4 className="text-justify text-xl w-5/6 mx-auto text-gray-500 ">
            Applicability:
          </h4>
          <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            Different coupons and offers may have specific terms of eligibility.
            Some may apply only to specific meals, while others may be valid on
            a minimum order value. Always read the terms and conditions
            associated with each offer.
          </p>
          <h4 className="text-justify text-xl w-5/6 mx-auto text-gray-500 ">
            Combine Offers for Extra Savings:
          </h4>
          <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            To maximize savings, combine multiple offers or use them during
            festive or seasonal discounts.
          </p>
        </div>
        <h2 className="mt-5 mb-2 text-justify text-2xl w-5/6 mx-auto text-black ">
          FAQ
        </h2>
        <div className="faqs text-justify">
          {faqs.map((faq, index) => (
            <FAQs faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div>
          <h3 className="my-2 text-justify text-2xl w-5/6 mx-auto text-black ">
            How can I stay updated on RailKafe offers and promo codes?
          </h3>
          <p className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
            To stay informed about RailKafe offers, promo codes, and exclusive
            discounts, you can:
          </p>
          <ul className="list-decimal">
            <li className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
              Subscribe to our newsletter on their website.
            </li>
            <li className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
              Follow RailKafe on social media platforms like Facebook, Twitter,
              and Instagram.
            </li>
            <li className="text-gray-500 text-justify fon-semibold w-5/6 mx-auto text-base">
              Download the RailKafe app and enable push notifications for
              real-time updates on new offers and deals.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BestOffer;
