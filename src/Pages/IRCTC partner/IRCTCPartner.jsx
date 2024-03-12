import "./IRCTCPartner.css";
// import IRCTC from "./../../Assets/irctc-logo 1.png";
import Howworks from "./../../Assets/Howworks.png";
const IRCTCPartner = () => {
  return (
    <section>
      
      <div className="mainIRCTC1 mt-5 mb-4">
        <h2 className="font-semibold">Follow these steps to Order Food on Train</h2>
      </div>
      <img className="mx-auto sm:px-4 px-1 h-28  sm:h-auto" style={{borderRadius:"3.5rem"}} src={Howworks} alt="" />
    </section>
  );
};

export default IRCTCPartner;
