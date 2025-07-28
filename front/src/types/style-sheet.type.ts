import type { CSSProperties } from "react";
import type { SxProps } from "@mui/material";

type StyleSheetGenrator = (props: Record<string, any>) => CSSProperties | SxProps<any>;

export type StyleSheet = {
  [key: string]: CSSProperties | SxProps<any> | StyleSheetGenrator;
};