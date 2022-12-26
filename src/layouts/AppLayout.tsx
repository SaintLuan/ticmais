import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import Head from "next/head";
import { ThemeProvider } from "styled-components";


interface Props {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children, title, description }) =>{

    const appName = process.env.NEXT_PUBLIC_APP_NAME || 'TicMais';
    const pageTitle = title ? `${title} | ${appName}` : appName;
    const metaDescription = description ? description : 'Site institucional TicMais';

    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                

                <title></title>
                {/* SEO Configs */}
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="author" content="Mastercomps - Soluções em Tecnologia" />

                {/* Favicon Imports */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>

            </Head>

            <main>
                {children}
            </main>
        </ThemeProvider>
    )
}