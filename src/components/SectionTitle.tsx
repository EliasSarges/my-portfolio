import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export interface SectionTitleProps extends PropsWithChildren {}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <Typography fontSize="2rem">{children}</Typography>;
};
