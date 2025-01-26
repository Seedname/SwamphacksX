import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider 
  domain="dev-qqmcm7oc7pbvgr83.us.auth0.com"
  clientId="i4oGHkrNdGC8NfJMB8lxr7dH4DIJ97cN"
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: "https://dev-qqmcm7oc7pbvgr83.us.auth0.com/api/v2/",
    scope: "openid profile email"
  }}
  cacheLocation="localstorage"
>
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
  </Auth0Provider>
);