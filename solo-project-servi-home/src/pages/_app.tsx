import Layout from '../components/Layout'
import 'src/styles/globals.css'
import React, { useEffect } from 'react';
import { useAuth } from "../lib/store";
import { AppProps } from 'next/app';


export default function App({ Component, pageProps }:AppProps): JSX.Element {

  

  useEffect(() => {
    
    const auth:string = localStorage.getItem('auth');
   if(auth){

    useAuth.getState().setAuth(JSON.parse(auth))

  }
    
    

  }, []);

  
  return <Layout><Component {...pageProps} /></Layout>
}