import React from "react";
import "nes.css/css/nes.min.css";
import './App.css'
import { Notes } from "./components/Notes/Notes";


function App() {

  return (
    <div className="App">
      <h1>My Notes</h1>
        <Notes/>
    </div>
  )
}

export default App
