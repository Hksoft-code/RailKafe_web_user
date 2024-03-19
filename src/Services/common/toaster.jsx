// ToastService.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const showToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
  });
};

export default showToast;
