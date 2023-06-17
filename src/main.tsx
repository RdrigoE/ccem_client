import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
    BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./theme"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
