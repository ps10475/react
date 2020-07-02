import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Slider from './component/slide/Slider';
import Content from './component/content/Content';
import Footer from './component/footer/Footer';

function App() {
   
  return (
    <div className="App">
      <Header data='alertneo'/>
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
