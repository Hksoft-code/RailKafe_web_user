import delicioustext from "../../Assets/delicioustext.png";
import items from "../../Assets/items.png";

const AboutRail = () => {
  return (
    <section className="mb-20">
      <div className="uppermain1 ">
        <div className="d-flex items-center justify-around p-4 sm:p-12 ">
          <img className="w-2/4 sm:w-2/5" src={delicioustext} alt="Delicious" />
          <img className="w-1/2 sm:w-80" src={items} alt="tasty" />
        </div>
      </div>
      <h5 className="font-bold text-justify w-4/5 mx-auto text-2xl mt-4 mb-3">
        Welcome to RailKafe!
      </h5>
      <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
        We are a premier food delivery service that specializes in delivering
        delicious meals right to your train compartment. Whether you&apos;re a
        busy traveller or just craving some scrumptious food while on the go,
        Railkafe is here to satisfy your taste buds and make your train journey
        even more enjoyable At RailKafe, we understand the unique needs of train
        travellers.
      </p>
      <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
        That&apos;s why we&apos;ve designed our service to be convenient,
        reliable, and tailored specifically for train passengers. Our restaurant
        partners consist of culinary experts working diligently to curate a
        diverse menu featuring a wide range of cuisines, from local favourites
        to international delights, to suit every palate. We take pride in our
        efficient delivery system that ensures your food arrives hot and ready
        to be savoured. Our delivery partners are trained to navigate the
        intricacies of train travel, coordinating with train staff to deliver
        your meal at the right time and place. We understand that punctuality is
        crucial when it comes to train travel, and we strive to ensure that your
        meal arrives on time, every time. Restornia Private Limited is committed
        to providing exceptional customer service.
      </p>
      <p className="text-justify w-4/5 mx-auto text-xl text-gray-500">
        Our friendly and knowledgeable customer support team is available from 9
        Am to 10 Pm on all working days to assist you with any questions,
        concerns, or special requests you may have. We value your feedback and
        are constantly working to improve our service to exceed your
        expectations. RailKafe is more than just a food delivery service;
        it&apos;s a culinary experience that brings the joy of delicious food to
        your train journey. We are passionate about food and travel, and we
        believe that great meals can enhance your travel experience. Join us on
        this culinary adventure and let RailKafe be your trusted food delivery
        companion on your next train trip. Thank you for choosing RailKafe, and
        good appétite !
      </p>
    </section>
  );
};

export default AboutRail;
