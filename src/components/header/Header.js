import React from 'react';
import Toggle from '../toggle/Toggle'; 
import "./Header.css"


const Header = () => {
  // const { toggleTheme } = useTheme();

  return (
    <div className='header'>
    <div className="header-wrapper">
      <div><h2>My Expense Tracker</h2> </div>
      
     
      <Toggle/> 
    </div>
    </div>
    
  );
};

export default Header;

