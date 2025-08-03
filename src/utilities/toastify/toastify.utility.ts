import { toast } from "react-toastify";
import { useStyles } from "./toastify.style";
import type { TToastStyle } from "./toastify.type";
import { TOASTIFY_CONFIGURATION } from "./tosatify.const";

export const toastify = (type: TToastStyle, message: string) => {
  const styles = useStyles();

  return toast[type](message, {
    ...TOASTIFY_CONFIGURATION,
    style: styles[type],
  });
};
