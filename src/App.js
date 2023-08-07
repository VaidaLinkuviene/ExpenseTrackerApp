import React from 'react';
import './App.css';
// import Inputs from './components/inputs/Inputs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core';
// import ChartWrapper from './components/chartWrapper/ChartWrapper';
// import Header from './components/header/Header';
import MainWindow from './components/mainWindow/MainWindow';
import { ThemeProvider } from './components/themeProvider/ThemeContext';

library.add();

function App() {
  return (
    <ThemeProvider>
    {/* <GlobalStyles />  */}
    <div className={`App`}>
      <MainWindow />
    </div>
  </ThemeProvider>
);
}

export default App;
