import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// importing mui themes
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthContextProvider } from './context/AuthContext.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>,
  </AuthContextProvider>

)
