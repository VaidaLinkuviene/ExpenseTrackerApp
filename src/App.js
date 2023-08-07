import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from '@fortawesome/fontawesome-svg-core'
import { ThemeProvider } from './components/themeProvider/ThemeContext';
import MainWindow from './components/mainWindow/MainWindow';


library.add();

function App() {

  

  return (
    <ThemeProvider>
    <div className="App">
      <MainWindow/>
    </div>
  </ThemeProvider>
);
}

export default App;
