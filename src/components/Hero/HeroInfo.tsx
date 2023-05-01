import { Stack, Typography, Box, Button } from "@mui/material";

export const HeroInfo = () => {
  return (
    <Stack maxWidth="35rem">
      <Typography
        fontFamily="Play, sans-serif"
        fontSize={{
          xs: "1.5rem",
          sm: "2rem",
        }}
      >
        Olá, <br /> meu nome é<br />
      </Typography>

      <Typography
        fontFamily="Porter Sans Block, sans-serif"
        color="primary.main"
        lineHeight={1.2}
        fontSize={{
          xs: "3rem",
          md: "4.5rem",
        }}
      >
        Elias <br /> Castro
      </Typography>

      <Typography component="p" lineHeight={1.5} mt={4}>
        Desenvolvedor{" "}
        <Typography component="em" color="primary.main">
          front end
        </Typography>{" "}
        (ocasionalmente, designer), meu foco é sempre proporcionar a melhor
        experiência para o usuário, aliando beleza, funcionalidade e alto
        desempenho.
      </Typography>

      <Box mt={4}>
        <Button variant="outlined">veja meus ultimos trabalhos</Button>
      </Box>
    </Stack>
  );
};
