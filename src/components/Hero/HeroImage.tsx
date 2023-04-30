import { Stack, Box, SxProps } from "@mui/material";
import { ImageBadge } from "./ImageBadge";
import Me from "~/assets/images/me.jpg";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <Stack
      height="fit-content"
      position="relative"
      direction="row"
      flexGrow={1}
      pl={2}
      pb={2}
    >
      <Box
        alt="Elias Castro"
        component={Image}
        borderRadius={5}
        sx={sxImage}
        src={Me}
      />

      <ImageBadge />
    </Stack>
  );
};

export const sxImage: SxProps = {
  height: "fit-content",
  width: {
    sm: "10rem",
    md: "100%",
  },
};
