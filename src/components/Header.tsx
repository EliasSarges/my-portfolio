import { Container, Link, Stack, styled } from "@mui/material";
import logo from "~/assets/images/logo.svg";
import Image from "next/image";

export const Header = () => {
  const menuItems = ["Inicio", "Sobre mim", "Experiência", "Contato"];

  return (
    <Container
      sx={{ position: "sticky", top: 0, zIndex: 99, backgroundColor: "#333" }}
    >
      <Stack component="nav" direction="row" gap={1} py={2} alignItems="center">
        <Image src={logo} alt="logo" />

        <Stack justifyContent="center" direction="row" flexGrow={1} gap={4}>
          {menuItems.map((item) => (
            <StyledLink href={`#${item}`} key={item}>
              {item}
            </StyledLink>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-family: Play, sans-serif;

  :hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
