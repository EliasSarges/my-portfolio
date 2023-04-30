import { Stack, Typography, SxProps } from "@mui/material";

export const ImageBadge = () => {
  return (
    <Stack sx={sxImageBadge} borderRadius={1} px={2} py={1}>
      <Typography fontSize={25}>3+</Typography>

      <Typography
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        anos de experiência
      </Typography>
    </Stack>
  );
};

export const sxImageBadge: SxProps = {
  backgroundColor: "#000",
  position: "absolute",
  bottom: 0,
  left: 0,
};
