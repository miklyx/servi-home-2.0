import Layout from 'src/components/Layout'
import 'src/styles/globals.css'
import React, { useEffect } from 'react';
import { useAuth } from "../lib/store";

export default function App({ Component, pageProps }) {

  

  useEffect(() => {
    
    const auth = localStorage.getItem('auth');
   if(auth){

    useAuth.getState().setAuth(JSON.parse(auth))

  }
    
    

  }, []);

  
  return <Layout><Component {...pageProps} /></Layout>
}