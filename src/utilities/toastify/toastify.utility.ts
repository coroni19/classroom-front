import { useStyles } from "./toastify.style";
import { toast, type TypeOptions } from "react-toastify";
import { ERROR_TOAST_OPTION, TOASTIFY_CONFIGURATION } from "./tosatify.const";

export const toastify = (type: TypeOptions, message: string) => {
  const styles = useStyles();

  if (type === ERROR_TOAST_OPTION) {
    return toast.error(message, {
      ...TOASTIFY_CONFIGURATION,
      style: styles.errorToastify,
    });
  }
};
