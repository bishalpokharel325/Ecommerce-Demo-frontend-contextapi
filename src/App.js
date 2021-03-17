import { createContext, useState } from 'react';
import './App.css';
import Router from './routers/Router'
 const keywordContext=createContext()
 const cartnoContext=createContext()

function App() {
 
  const [keyword,setKeyword]=useState(null)
  const [cartno,setCartno]=useState(0)
  return (
    <div className="app">
      <keywordContext.Provider value={{keyword,setKeyword}}>
        <cartnoContext.Provider value={{cartno,setCartno}}>
        <Router/>
        </cartnoContext.Provider>
      </keywordContext.Provider>
      
    </div>
  );
}
export {keywordContext,cartnoContext}
export default App;
