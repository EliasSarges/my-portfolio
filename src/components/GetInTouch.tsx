import { Button, Stack, Typography } from "@mui/material";
import { SectionTitle } from "./SectionTitle";
import Link from "next/link";

export const GetInTouch = () => {
  return (
    <Stack component="section">
      <SectionTitle>Entre em contato</SectionTitle>

      <Typography>
        Se quiser fazer um projeto ou bater um papo, chama ai, farei o possível
        pra responder :)
      </Typography>

      <Button
        href="mailto:eliassarges@oulook.com"
        LinkComponent={Link}
        variant="contained"
        sx={{ mt: 2 }}
      >
        me mande um oi
      </Button>
    </Stack>
  );
};
