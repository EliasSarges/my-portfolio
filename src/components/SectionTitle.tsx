import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export interface SectionTitleProps extends PropsWithChildren {}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Typography fontWeight="bold" pt={10} pb={2} fontSize="2rem" component="h2">
      {children}
    </Typography>
  );
};
