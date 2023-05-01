import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Play&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="Elias Castro" />
        <meta
          name="description"
          content="Desenvolvedor Front End com habilidades em design, criando experiências de usuário excepcionais."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://my-portfolio-nu-dun.vercel.app/"
        />
        <meta property="og:title" content="Elias Castro" />
        <meta
          property="og:description"
          content="Desenvolvedor Front End com habilidades em design, criando experiências de usuário excepcionais."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/38994457?s=400&u=fc450f34e4de342ab76a90b281512edbc7549231&v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://my-portfolio-nu-dun.vercel.app/"
        />
        <meta property="twitter:title" content="Elias Castro" />
        <meta
          property="twitter:description"
          content="Desenvolvedor Front End com habilidades em design, criando experiências de usuário excepcionais."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/38994457?s=400&u=fc450f34e4de342ab76a90b281512edbc7549231&v=4"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
