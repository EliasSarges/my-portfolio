import { HeroImage } from "./HeroImage";
import { HeroInfo } from "./HeroInfo";
import { Stack } from "@mui/material";

export const Hero = () => {
  return (
    <Stack direction="row" gap={4}>
      <HeroInfo />

      <Stack
        height="fit-content"
        flexGrow={2}
        display={{
          xs: "none",
          sm: "flex",
        }}
      >
        <HeroImage />
      </Stack>
    </Stack>
  );
};
