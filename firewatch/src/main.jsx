import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// import  from './pages/Login/Login.jsx';

const theme = {
  primaryColor: 'red',
  colors: {
    red: [
      '#FFE7E7',
      '#FFD0D0',
      '#FFA5A5',
      '#FC7474',
      '#F74D4D',
      '#F03333',
      '#E62222',
      '#D61C1C',
      '#C21919',
      '#AB1818',
    ],
  },
  fontFamily: 'Arial, sans-serif',
  components: {
    Container: {
      defaultProps: { size: 'xl', px: 'md' }
    },
    Button: {
      defaultProps: { size: 'md' }
    },
    Anchor: {
      defaultProps: { 
        color: 'white',
        underline: 'hover'
      }
    }
  }
};

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
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
  </Auth0Provider>
);