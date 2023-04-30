import { AboutMe } from "~/components/AboutMe/AboutMe";
import { Skills } from "~/components/Skills/Skills";
import { Hero } from "~/components/Hero/Hero";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container component="main" sx={{ py: 10 }}>
      <Hero />

      <AboutMe />

      <Skills />
    </Container>
  );
}
