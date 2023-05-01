import { SyntheticEvent, useCallback, useMemo, useState } from "react";
import programming from "~/assets/images/programming.svg";
import { SectionTitle } from "../SectionTitle";
import Image from "next/image";
import {
  useMediaQuery,
  Typography,
  useTheme,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";

type Work = {
  id: number;
  name: string;
  skills: string[];
  time: string;
  description: string;
};

export const WhereIWorked = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [currentTab, setCurrentTab] = useState(0);

  const work: Work | null = useMemo(
    () => works.find((work) => work.id === currentTab) || null,
    [currentTab]
  );

  const handleChangeTab = useCallback(
    (event: SyntheticEvent, value: number) => {
      setCurrentTab(value);
    },
    []
  );

  return (
    <Stack component="section" id="Experiência">
      <SectionTitle>Locais onde trabalhei</SectionTitle>

      <Stack
        direction={{
          md: "row-reverse",
        }}
        gap={4}
      >
        <Stack
          component={Image}
          src={programming}
          alt="programando-ilustracao"
          height="fit-content"
          alignSelf="center"
          width={{
            xs: "15rem",
            md: "18rem",
            lg: "20rem",
          }}
        />

        <Stack direction={{ sm: "row" }} py={2} gap={4}>
          <Stack>
            <Tabs
              value={currentTab}
              orientation={matches ? "vertical" : "horizontal"}
              onChange={handleChangeTab}
            >
              {tabOptions.map((tab) => (
                <Tab key={tab.id} label={tab.name} value={tab.id} />
              ))}
            </Tabs>
          </Stack>

          <Stack>
            {work && (
              <>
                <Typography color="primary.main" fontSize={22}>
                  {work.name}
                </Typography>

                <Typography component="p" mt={3}>
                  {work.description}
                </Typography>

                <Typography mt={2} fontWeight="bold">
                  Competências:
                </Typography>

                <Stack component="ul" gap={1}>
                  {work.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </Stack>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const works: Work[] = [
  {
    id: 0,
    name: "@Movisis tecnologia ltda",
    description:
      "Desenvolvedor responsável pelo time de front-end, comecei desenvolvendo e dando manutenção aos dois projetos Web. Após alguns meses, fui responsável por migrar e refatorar o antigo projeto para Typescript e adicionar ao mororepo já existente.",
    skills: [
      "Nx",
      "Desenvolvimento e publicação de modulos NPM",
      "Rollup",
      "React.js",
      "TypeScript",
    ],
    time: "Janeiro de 2022 - trabalho aqui atualmente",
  },
  {
    id: 1,
    name: "@Multiplier",
    description:
      "Comecei no time de integração usando typescript e node, depois tive uma oportunidade de fazer parte do time de front-end, usando Vue.js.",
    skills: [
      "Vuejs",
      "Tailwind",
      "PugJS",
      "Quasar Framework",
      "Node.js",
      "TypeScript",
    ],
    time: "jul de 2021 - out de 2021 · 4 meses",
  },
];

const tabOptions = [
  {
    name: "Movisis",
    id: 0,
  },
  {
    name: "Multiplier",
    id: 1,
  },
];
