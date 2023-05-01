import { AboutMe } from "~/components/AboutMe";
import { Skills } from "~/components/Skills";
import { Hero } from "~/components/Hero/Hero";
import { Container } from "@mui/material";
import { GetInTouch } from "~/components/GetInTouch";
import { WhereIWorked } from "~/components/WhereIWorked/WhereIWorked";

export default function Home() {
  return (
    <Container component="main" sx={{ py: 10 }}>
      <Hero />
      <AboutMe />
      <Skills />
      <WhereIWorked />
      <GetInTouch />
    </Container>
  );
}
