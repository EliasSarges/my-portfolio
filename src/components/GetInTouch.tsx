import { SectionTitle } from "./SectionTitle";
import Link from "next/link";
import {
  useMediaQuery,
  Typography,
  useTheme,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { Mail } from "@mui/icons-material";

export const GetInTouch = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack component="section" id="Contato">
      <SectionTitle>Entre em contato</SectionTitle>

      <Typography>
        Se quiser fazer um projeto ou bater um papo, chama ai, farei o possível
        pra responder :)
      </Typography>

      <Box>
        <Button
          startIcon={<Mail />}
          fullWidth={matches ? false : true}
          href="mailto:eliassarges@oulook.com"
          LinkComponent={Link}
          variant="contained"
          sx={{ mt: 2 }}
        >
          me mande um oi
        </Button>
      </Box>
    </Stack>
  );
};
