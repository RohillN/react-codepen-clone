import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import useLocalStorage from './components/hooks/useLocalStorage';
import { Themes } from './components/Theme';
import './ThemeImports';

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [javascript, setJavascript] = useLocalStorage('javascript', '');
  const [srcDoc, setSrcDoc] = useState('');
  const [theme, setTheme] = useLocalStorage('theme', 'default');
  const [loading, setLoading] = useState(true);

  const handleThemeTypeChange = (e) => setTheme(e.target.value);
  // const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script crossorigin>${javascript}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout);
  }, [html, css, javascript])

  return (
    // loading && theme !== null ? <p>Loading...</p> :
      <div className="App">
        <div className="select">
          <select onChange={handleThemeTypeChange}>
            <option className="currentSelected" value={theme}>{theme} (current theme)</option>
            {
              Themes.map((item, index) => (
                <option key={`theme-${index}-${item.theme}`} value={item.theme}>{item.theme}</option>
              ))
            }
          </select>
        </div>
        <div className="pane top-pane">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
            theme={theme} />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
            theme={theme} />
          <Editor
            language="javascript"
            displayName="JAVASCRIPT"
            value={javascript}
            onChange={setJavascript}
            theme={theme} />

        </div>
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
  );
}

export default App;
