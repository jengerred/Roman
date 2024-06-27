import React from 'react';
import './Styles/App.css'
import './Styles/index.css'
import { CardsProvider } from '../src/Components/CardsContext';
import CardLayout from '../src/Components/Cards';
import Header from '../src/Components/Header';

function App() {
  return (
    <>
  
    <CardsProvider>
    
      <div className="App">
  
      <Header/>
      <div>
     
   <h1 className="subtitle">Roman's Animations</h1>
  
   </div>
        <CardLayout/>
        </div>
      
    </CardsProvider>
    </>
   
  );
}

export default App;