import React, { Component, useState } from 'react';
import './App.css';
import AppHeader from "./components/app-header/AppHeader";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/global';

function App () {
    const [theme, setTheme] = useState('light');

// The function that toggles between themes
    const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (theme === 'light') {
            setTheme('dark');
            // otherwise, it should be light
        } else {
            setTheme('light');
        }
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <div className="App">
                    <button onClick={toggleTheme}>Change theme</button>
                    <AppHeader/>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
