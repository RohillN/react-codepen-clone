import React from 'react';
import { Themes } from './components/Theme';
import useLocalStorage from './components/hooks/useLocalStorage';
import { Default } from './components/Default';
import './ThemeImports';
import Panes from './components/Panes';
import './components/Navbar.css';
import * as SiIcons from 'react-icons/si';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', Default[0].theme);
  const handleThemeTypeChange = (e) => setTheme(e.target.value);
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className="App">
      <header id="navbar">
        <nav className="navbar-container container">
          <a href="/" className="home-link">
            <div><SiIcons.SiCoderwall className="navbar-logo" /></div>
            Codepen Clone
          </a>
          <div className="navbar-menu">
            <ul className="navbar-links">
              <li className="navbar-item"><a className="navbar-link" href="/about">About</a></li>
              <li className="navbar-item"><a className="navbar-link" href="/blog">Blog</a></li>
              <li className="navbar-item"><a className="navbar-link" href="/careers">Careers</a></li>
              <li className="navbar-item"><a className="navbar-link" href="/contact">Contact</a></li>
              <li className="navbar-item">
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
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Panes theme={theme} />
    </div>
  );
}

export default App;
