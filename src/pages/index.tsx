import { Container } from "@mui/material";
import { AboutMe } from "~/components/AboutMe/AboutMe";
import { Hero } from "~/components/Hero/Hero";

export default function Home() {
  return (
    <Container component="main">
      <Hero />

      <AboutMe />
    </Container>
  );
}
