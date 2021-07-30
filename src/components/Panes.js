import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from './hooks/useLocalStorage';
import { Default } from './Default';

export default function Panes(props) {
    const { theme } = props;

    const [html, setHtml] = useLocalStorage('html', Default[0].html);
    const [css, setCss] = useLocalStorage('css', Default[0].css);
    const [javascript, setJavascript] = useLocalStorage('javascript', Default[0].javascript);
    const [srcDoc, setSrcDoc] = useState('');

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
        <div>
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
    )
}
