import React, { useContext } from 'react';
import { ThemeContext } from '../themeProvider/ThemeContext';
import "./Toggle.css"

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
<div className='toggle-switch'>
   <label className="switch-label">
      <input className="checkbox" type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className='slider'></span>
    </label>
</div>
   

  );
};


export default Toggle;

