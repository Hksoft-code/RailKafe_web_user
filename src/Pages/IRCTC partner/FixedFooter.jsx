import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import "./fixednav.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes

export default function LabelBottomNavigation({ toggleDrawer }) {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      style={{ position: "fixed", bottom: "0" }}
      value={value}
      onChange={handleChange}
      showLabels={true}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeOutlinedIcon />}
        component={Link} // Use Link component from React Router
        to="/"
      />
      <BottomNavigationAction
        label="TrainTool"
        value="traintool"
        icon={<TrainOutlinedIcon />}
        component={Link} // Use Link component from React Router
        to="/train-tools"
      />
      <BottomNavigationAction
        label="Order"
        value="Order"
        icon={<MessageOutlinedIcon />}
        component={Link}
        to="/order-food"
      />
      <BottomNavigationAction
        label="Offer"
        value="offer"
        icon={<CardGiftcardOutlinedIcon />}
        component={Link}
        to="/offer"
      />
      <BottomNavigationAction
        label="Menu"
        value="menu"
        icon={<ListOutlinedIcon />}
        onClick={toggleDrawer}
      />
    </BottomNavigation>
  );
}

// Add prop types validation
LabelBottomNavigation.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
