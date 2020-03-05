import React, { useState } from 'react';
import './App.css';
import AppContent from "./components/app-content/AppContent";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/global';

function App () {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <div className="App">
                    <AppContent toggleTheme={toggleTheme}/>
                </div>

            </>
        </ThemeProvider>
    );
}

export default App;
