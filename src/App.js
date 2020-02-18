import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ArtistsList from "./components/ArtistsList";



function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <SearchBar/>
      <ArtistsList/>
      <Footer/>
    </div>
  );
}

export default App;
