import { GlobalStyle } from '@/styles/global';
import { AppLayout } from '@/layouts/AppLayout';
import { Header } from '@/components/shared/Header';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';
import { Footer } from '@/components/shared/Footer';

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <AppLayout title='Home'>
        <>
          <Header />

          <Footer />
        </>
      </AppLayout>
    </ThemeProvider>
      
  )
}
