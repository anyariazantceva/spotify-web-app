import React, { useState } from 'react';
import './App.css';
import AppHeader from "./components/app-header/AppHeader";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/global';
import NewRouter from "./components/NewRouter";

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

                    <AppHeader toggleTheme={toggleTheme}/>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
