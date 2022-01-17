import { toast } from "react-toastify";

export const showSuccess = (msg) => {
  toast.success(msg);
};

export const showError = (err) => {
  let msg = "Something went wrong.";

  if (err?.msg) {
    msg = err.msg;
  }
  toast.error(msg);
};
