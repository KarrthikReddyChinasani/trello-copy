/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { getHeaderContainerStyle, getHeaderStyle } from './Header.style';
import Switch from "react-switch";
import ThemeProvider from '../../context/ThemeProvider.context';
import { themeColors } from '../../constants/theme.style';


const Header = () => {

    const [toggle, setToggle] = useState(false);
    const { setTheme } = useContext(ThemeProvider); 

    const onToggleClick = () => {
      setToggle(!toggle)
    }

    const updateTheme = (themeType) => {
      const selectedTheme = themeColors[themeType];
      const {body} = selectedTheme;
      var x = document.getElementsByTagName("BODY")[0];
      x.style.backgroundImage = `linear-gradient(${body.background.color1},${body.background.color2})`;
      setTheme(selectedTheme)
    }
    
    useEffect(() => {
      updateTheme(toggle ? 'dark' : 'light')
    }, [toggle])

    return (<header style={getHeaderStyle()}>
      <div style={getHeaderContainerStyle()}>
        <p>Trello</p>
        <label>
          <span>Dark Mode</span>
          <Switch onChange={onToggleClick} checked={toggle} />
        </label>
      </div>
      
    </header>)
};

export default Header;