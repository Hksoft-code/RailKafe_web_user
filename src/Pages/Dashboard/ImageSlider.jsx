import InfiniteCarousel from "react-leaf-carousel";
import Add3 from "./../../Assets/offer1 (1).jpg";
// import Add4 from "./../../Assets/offer1 (1).webp";
import Add5 from "./../../Assets/offer1 (2).jpg";
// import Add6 from "./../../Assets/offer1 (2).webp";
import Add7 from "./../../Assets/offer1 (3).jpg";
import Add8 from "./../../Assets/offer1 (4).jpg";
import Add9 from "./../../Assets/offer1 (5).jpg";

function UpComingFood() {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={false}
      autoCycle={true}
      arrows={false}
      showSides={true}
      sidesOpacity={0.7}
      sideSize={0.5}
      slidesToScroll={1}
      slidesToShow={4}
      scrollOnDevice={true}
      cycleInterval={1000}
      pauseOnHover={true}
      animationDuration={900}
    >
      <div className="  m-1 ">
        <img className="w-full h-full" src={Add3} alt="" />
      </div>
      <div className=" m-1 ">
        <img className="w-full h-full" src={Add8} alt="" />
      </div>
      <div className=" m-1 ">
        <img className="w-full h-full" src={Add5} alt="" />
      </div>
      <div className=" m-1 ">
        <img className="w-full h-full" src={Add9} alt="" />
      </div>
      <div className=" m-1 ">
        <img className="w-full h-full" src={Add7} alt="" />
      </div>
      <div className=" m-1 ">
        <img className="w-full h-full" src={Add8} alt="" />
      </div>
      <div className=" m-1 ">
        <img className="w-full h-full" src={Add9} alt="" />
      </div>
    </InfiniteCarousel>
  );
}

export default UpComingFood;
