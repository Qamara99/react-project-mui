import React, { Component, useEffect } from 'react'
import i18next from 'i18next'
import {

  RouterProvider,
} from "react-router-dom";
import router from './router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useTranslation } from 'react-i18next';
export default function App()  {

  const queryClient = new QueryClient();
   const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (

    <> <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider></>
  
  )

}