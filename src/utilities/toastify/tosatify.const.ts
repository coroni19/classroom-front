export const INFO_TOAST_OPTION = "info";
export const ERROR_TOAST_OPTION = "error";
export const SUCCESS_TOAST_OPTION = "success";
export const WARNING_TOAST_OPTION = "warning";
export const DEFAULT_TOAST_OPTION = "default";

import type { ToastOptions } from "react-toastify";

export const TOASTIFY_CONFIGURATION: ToastOptions = {
  autoClose: 4000,
  closeButton: false,
  hideProgressBar: true,
  position: "bottom-right",
};
