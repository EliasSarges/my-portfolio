import { Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import programmer from "~/assets/images/programmer.svg";
import { SectionTitle } from "./SectionTitle";
import Link from "next/link";

export const AboutMe = () => {
  const { palette } = useTheme();

  return (
    <Stack component="section" id="Sobre mim">
      <SectionTitle>Sobre mim</SectionTitle>

      <Stack
        alignItems="center"
        gap={4}
        direction={{
          md: "row",
        }}
      >
        <Stack
          alt="ilustracao-programador"
          height="fit-content"
          component={Image}
          src={programmer}
          width={{
            xs: "15rem",
            md: "20rem",
            lg: "30rem",
          }}
        />

        <Stack gap={4}>
          <Typography component="p">
            Olá, sou um desenvolvedor{" "}
            <Typography color="primary.main" component="em">
              front end
            </Typography>{" "}
            apaixonado por tecnologia. Para mim, desenvolver não é apenas um
            trabalho, mas também um hobby que amo dedicar meu tempo livre. Adoro
            criar soluções digitais inovadoras que possam resolver problemas
            reais e melhorar a vida das pessoas.
          </Typography>

          <Typography>
            Quando não estou programando, você pode me encontrar tocando
            guitarra, minha outra paixão na vida. Junte esses dois interesses e
            você terá um desenvolvedor criativo e apaixonado por desafios. Estou
            sempre em busca de novas oportunidades para aprimorar minhas
            habilidades e aprender coisas novas, então, se você está procurando
            um desenvolvedor Front-end que pode fazer a diferença em seu
            projeto, fique à vontade para{" "}
            <Link
              href="mailto:eliassarges@oulook.com"
              style={{
                color: palette.primary.main,
              }}
            >
              entrar em contato
            </Link>{" "}
            comigo.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
