import { Chip, Stack, Typography } from "@mui/material";
import { SectionTitle } from "./SectionTitle";

export const Skills = () => {
  const skills = ["React.JS", "React-native", "Next.JS", "Node.JS"];

  return (
    <Stack component="section">
      <SectionTitle>Principais tecnologias que utilizo</SectionTitle>

      <Typography>
        Tenho conhecimento em desenvolvimento de{" "}
        <Typography component="em" color="primary.main">
          sites estáticos
        </Typography>
        ,{" "}
        <Typography component="em" color="primary.main">
          dinamicos
        </Typography>
        , aplicações{" "}
        <Typography component="em" color="primary.main">
          client-side
        </Typography>
        ,{" "}
        <Typography component="em" color="primary.main">
          server-side
        </Typography>
        , ou até mesmo{" "}
        <Typography component="em" color="primary.main">
          aplicativos
        </Typography>
        . seguindo boas praticas de desenvolvimento e{" "}
        <Typography component="em" color="primary.main">
          SEO
        </Typography>{" "}
        , para uma aplicação{" "}
        <Typography component="em" color="primary.main">
          escalável
        </Typography>
        , de fácil manutenção e com boa indexação nos mecanismos de busca.
      </Typography>

      <Typography pt={4}>As principais tecnologias que utilizo são:</Typography>

      <Stack direction="row" mt={2} gap={1} flexWrap="wrap">
        {skills.map((skill) => (
          <Chip key={skill} label={skill} color="primary" />
        ))}
      </Stack>
    </Stack>
  );
};
