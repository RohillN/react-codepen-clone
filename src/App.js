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
  const [theme, setTheme] = useState('material');

  const handleThemeTypeChange = (e) => setTheme(e.target.value);

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
    <div className="App">
      <p>Select a theme:
        <select onChange={e => handleThemeTypeChange(e)}>
          <option>{theme}</option>
          <hr />
          {
            Themes.map((item, index) => (
              <option key={`theme-${index}-${item.theme}`} value={item.theme}>{item.theme}</option>
            ))
          }
        </select>
      </p>
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
