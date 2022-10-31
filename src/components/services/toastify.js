import { toast } from "react-toastify";

const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
export const toastSuccess = (text) => {
  toast.success(text, options);
};
