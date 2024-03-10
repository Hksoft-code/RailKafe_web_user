// import InfiniteCarousel from "react-leaf-carousel";

// function UpComingFood() {
//   return (
//     <InfiniteCarousel
//       breakpoints={[
//         {
//           breakpoint: 500,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//           },
//         },
//       ]}
//       dots={false}
//       autoCycle={true}
//       arrows={false}
//       showSides={true}
//       sidesOpacity={0.5}
//       sideSize={0.1}
//       slidesToScroll={1}
//       slidesToShow={4}
//       scrollOnDevice={true}
//       cycleInterval={1000}
//       pauseOnHover={true}
//       animationDuration={500}
//     >
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//       <div className="p-3 m-3 bg-white">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           <b>Molestiae, et recusandae!</b> Quasi, obcaecati velit aspernatur{" "}
//           <b>quo quisquam illo.</b> Reiciendis, non.
//         </p>
//       </div>
//     </InfiniteCarousel>
//   );
// }

// export default UpComingFood;
import "./marquee.css";
const VerticalMarquee = () => {
  const entries = [
    {
      name: "Ankit Sharma",
      trainNumber: "DURANTO EXPRESS",
      stationName: "KANPUR CENTRAL",
    },
    {
      name: "Raushan Kumar",
      trainNumber: "AMRITSAR EXPRESS",
      stationName: "VADODARA Jn.",
    },
    {
      name: "Yukta Kumari",
      trainNumber: "TEJAS EXPRESS",
      stationName: "KOTA Jn.",
    },
    {
      name: "Shubham Patel",
      trainNumber: "LUCKNOW MAIL",
      stationName: "MURADABAD Jn.",
    },
    {
      name: "Sanju Sharma",
      trainNumber: "SWARAJ EXPRESS",
      stationName: "RATLAM Jn.",
    },
    {
      name: "Rahul Yadav",
      trainNumber: "LUCKNOW MAIL",
      stationName: "MURADABAD Jn.",
    },
    {
      name: "Komal Gupta",
      trainNumber: "JHELAM EXPRESS",
      stationName: "BHUSAVAL Jn.",
    },
    {
      name: "Surak Kumar",
      trainNumber: "SHRI GANGA NAGAR",
      stationName: "BHOPAL Jn.",
    },
    {
      name: "Kishan Singh",
      trainNumber: "KARNATKA EXPRESS",
      stationName: "GWALIAR Jn.",
    },
    {
      name: "Rishab Kumar",
      trainNumber: "JHELAM EXPRESS",
      stationName: "AMBALA Cantt Jn.",
    },
    {
      name: "Apoorva Kumari",
      trainNumber: "NEW DELHI SF EXPRESS",
      stationName: "RATLAM Jn.",
    },
    {
      name: "Avinash Kumar",
      trainNumber: "VISAKHA EXPRESS",
      stationName: "VIJAYWADA Jn.",
    },
    {
      name: "Saurabh",
      trainNumber: "TELANGANA EXPRESS",
      stationName: "SECUNDRABAD Jn.",
    },
    {
      name: "Ashutosh Maurya",
      trainNumber: "SECUNDRABAD EXPRESS",
      stationName: "ITARIS Jn.",
    },
    {
      name: "Jivan Singh",
      trainNumber: "KERLA EXPRESS",
      stationName: "NAGPUR Jn.",
    },
    {
      name: "Arti Gupta",
      trainNumber: "RAJDHANI EXPRESS",
      stationName: "AHMEDABAD Jn.",
    },
    {
      name: "Golu",
      trainNumber: "POORVA EXPRESS",
      stationName: "PRAYAGRAJ Jn.",
    },
    {
      name: "Suman Sharma",
      trainNumber: "DURG SF EXPRESS",
      stationName: "DILASPUR Jn.",
    },
    {
      name: "Mohan Kumar",
      trainNumber: "SHALIMAR EXPRESS",
      stationName: "NEW DELHI",
    },
    {
      name: "Anu Pandey",
      trainNumber: "BARMER EXPRESS",
      stationName: "JAIPUR Jn.",
    },
  ];

  return (
    <div className="marquee-container sm:w-3/4 w-11/12 mx-auto rounded-xl shadow-custom ">
      <div className="marquee">
        {entries.map((entry, index) => (
          <div key={index} className="marquee-item">
            <p className="text-center my-2 text-gray-500 ">
              <strong className="text-black">{entry.name}</strong> Ordered food
              in <strong className="text-black">{entry.trainNumber}</strong> at{" "}
              <strong className="text-black">{entry.stationName}</strong>.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalMarquee;
