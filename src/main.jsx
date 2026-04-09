import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './i18next';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { useTranslation } from 'react-i18next';


function Root() {
  const { i18n } = useTranslation();

  const theme = createTheme({
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
  });

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });

  const cacheLtr = createCache({
    key: 'mui',
  });

  return (
    <CacheProvider value={i18n.language === 'ar' ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)