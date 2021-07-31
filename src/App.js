import React from 'react';
import { Themes } from './components/Theme';
import useLocalStorage from './components/hooks/useLocalStorage';
import { Default } from './components/Default';
import './ThemeImports';
import Panes from './components/Panes';
import Navbar from './components/navigation/Navbar';
import NavItem from './components/navigation/NavItem';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', Default[0].theme);
  const handleThemeTypeChange = (e) => setTheme(e.target.value);
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className="App">
      <Navbar>
        <NavItem>
          <a className="navbar-link" href="/about">About</a>
        </NavItem>
        <NavItem>
          <div className="select">
            <select onChange={handleThemeTypeChange}>
              <option className="currentSelected" value={theme}>{capitalizeFirstLetter(theme)} (current theme)</option>
              {
                Themes.map((item, index) => (
                  <option key={`theme-${index}-${item.theme}`} value={item.theme}>{capitalizeFirstLetter(item.theme)}</option>
                ))
              }
            </select>
          </div>
        </NavItem>
      </Navbar>
      <Panes theme={theme} />
    </div >
  );
}

export default App;
