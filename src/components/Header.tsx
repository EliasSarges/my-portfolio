import { Container, Stack, Typography } from "@mui/material";
import logo from "~/assets/images/logo.svg";
import Image from "next/image";

export const Header = () => {
  const menuItems = [
    "Inicio",
    "Sobre mim",
    "Experiência",
    "Meus projetos",
    "Contato",
  ];

  return (
    <Container>
      <Stack component="nav" direction="row" gap={1} py={2} alignItems="center">
        <Image src={logo} alt="logo" />

        <Stack
          display={{
            xs: "none",
            md: "flex",
          }}
          direction="row"
          gap={4}
          flexGrow={1}
          justifyContent="center"
        >
          {menuItems.map((item) => (
            <Typography key={item} fontFamily="Play, sans-serif">
              {item}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
