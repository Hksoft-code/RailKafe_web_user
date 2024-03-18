/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import Login from "../Pages/Auth/Login";
import OrderFood from "../Pages/OrderFood/OrderFood.jsx";
import TrainTool from "../Pages/TrainTool/TrainTool";
import GroupOrder from "../Pages/TrainTool/GroupOrder.jsx";
import CheckPNR from "../Pages/TrainTool/CheckPNR.jsx";
import CheckTrainTT from "../Pages/TrainTool/CheckTrainTT.jsx";
import PlatformLocator from "../Pages/TrainTool/PlatformLocator.jsx";
import CoachPosition from "../Pages/TrainTool/CoachPosition.jsx";
import FixedFooter from "./../Pages/IRCTC partner/FixedFooter.jsx";
import Header from "../Common-Components/Header.jsx";
import PrivacyPolicy from "../Pages/Otherpages/PrivacyPolicy.jsx";
import CancellationPolicy from "../Pages/Otherpages/CancellationPolicy.jsx";
import Faq from "../Pages/Otherpages/Faq.jsx";
import AboutRail from "../Pages/Otherpages/AboutRail.jsx";
import Contactus from "../Pages/contact/Contactus.jsx";
import Feedback from "../Pages/contact/feedback.jsx";
import Offer from "../Pages/offer/Offer.jsx";
import Profile from "../Pages/profile/Profile.jsx";
import Myorder from "../Pages/OrderFood/Myorder.jsx";
import Menu from "./../Pages/menu/Menu.jsx";
import Payment from "../Pages/payment/Payment.jsx";
import OrderSuccessfull from "../Pages/payment/OrderSuccessfull.jsx";
import ViewCartpage from "../Pages/payment/ViewCartpage.jsx";
import MainGroupOrder from "./../Pages/groupOrder/MainGroupOrder.jsx";
import GroupOrderBalance from "../Pages/groupOrder/GroupOrderBalance.jsx";
import Sidebar from "./../Pages/Otherpages/Sidebar.jsx";
import SearchRestaurant from "../Pages/serachrestaurant/SearchRestaurant.jsx";
import BoardingStation from "../Pages/BoardingStation.jsx";
import BestOffer from "../Pages/bestoffer/BestOffer.jsx";

function AppRoutes() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<ProtectedRoutes />} />
                    <Route path="/home" element={<PublicRoutes />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Order" element={<OrderFood />} />
          <Route path="/group-order" element={<GroupOrder />} />
          <Route path="/check-pnr" element={<CheckPNR />} />
          <Route path="/check-train-timetable" element={<CheckTrainTT />} />
          <Route path="/platform-locator" element={<PlatformLocator />} />
          <Route path="/coach-position" element={<CoachPosition />} />
          <Route path="/train-tools" element={<TrainTool />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about-railkafe" element={<AboutRail />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/myorders" element={<Myorder />} />
          <Route path="/order-food/:trainNumber" element={<OrderFood />} />
          <Route path="/menu/:rest_id" element={<Menu />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/ordersuccessfull" element={<OrderSuccessfull />} />
          <Route path="/viewcart" element={<ViewCartpage />} />
          <Route path="/book-group-order" element={<MainGroupOrder />} />
          <Route path="/balance-check" element={<GroupOrderBalance />} />
          <Route path="/search-restaurant" element={<SearchRestaurant />} />
          <Route path="/bording-station" element={<BoardingStation />} />
          <Route path="/best-offer" element={<BestOffer />} />
          {/* <Route path="/side" element={<Sidebar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>} /> */}
        </Routes>
        <Sidebar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <FixedFooter toggleDrawer={toggleDrawer} />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
