import { useState } from "react";
import profile1 from "./../../Assets/profilepic.jpg";
import { FaCamera } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { FaGift } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { VscCallIncoming } from "react-icons/vsc";
import { PiSignInBold } from "react-icons/pi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import "./profile.css";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(profile1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-4 w-fit mx-auto">
        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden profileimage">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full object-cover w-full h-full "
            />
          ) : (
            <span>No Image Selected</span>
          )}
        </div>
        <label htmlFor="imageInput" className="cursor-pointer mt-2 imagecamera">
          <FaCamera
            onClick={() => document.getElementById("imageInput").click()}
            className="text-3xl text-gray-300 imagecamera"
          />
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      <div>
        <h1 className="text-center m-2 text-xl font-bold">Rajesh Krishna</h1>
        <a
          href=""
          className="text-center text-lg font-semibold  text-gray-400 mb-4 no-underline"
        >
          Edit Profile
        </a>
      </div>
      <div className="lg:w-1/2 sm:w-full mb-16 mx-auto">
        <div className="d-flex items-center">
          <BiSolidNotepad className="text-2xl text-gray-500 m-4 "/> <a href="" className="m-4  no-underline text-gray-600  text-xl font-semibold">My Orders</a>
        </div>
        <div className="d-flex items-center">
          <FaGift className="text-2xl text-gray-500 m-4 "/> <a href="" className="m-4  no-underline text-gray-600  text-xl font-semibold">Play & Earn</a>
        </div>
        <div className="d-flex items-center">
          <IoPersonSharp className="text-2xl text-gray-500 m-4 "/> <a href="" className="m-4  no-underline text-gray-600  text-xl font-semibold">Edit Profile</a>
        </div>
        <div className="d-flex items-center">
          <MdHelpOutline className="text-2xl text-gray-500 m-4 "/> <a href="" className="m-4  no-underline text-gray-600  text-xl font-semibold">Help Center</a>
        </div>
        <div className="d-flex items-center">
          <VscCallIncoming className="text-2xl text-gray-500 m-4 "/> <a href="" className="m-4  no-underline text-gray-600  text-xl font-semibold">Callback Request</a>
        </div>
        <div className="d-flex items-center">
          <PiSignInBold className="text-2xl text-gray-500 m-4 "/> <a href="" className="m-4  no-underline text-gray-600  text-xl font-semibold">Restaurant Sign Up</a>
        </div>
        <div className="d-flex items-center">
          <RiDeleteBin2Fill className="text-2xl text-red-500 m-4 "/> <a href="" className="m-4  no-underline text-red-600  text-xl font-semibold">Delete Profile</a>
        </div>
      </div>
    </>
  );
};

export default Profile;
