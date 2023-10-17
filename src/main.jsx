import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// importing mui themes
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { Chat } from '@mui/icons-material';
import { ChatContextProvider } from './context/ChatContext.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </ChatContextProvider>
  </AuthContextProvider>

)
