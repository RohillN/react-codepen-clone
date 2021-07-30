import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as CodeMirror } from 'react-codemirror2'
import * as AiIcons from 'react-icons/ai';

export default function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange,
        theme,
    } = props;

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type="button"
                    className="expand-collapsed-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}>
                    {open ? <AiIcons.AiOutlineShrink size={22} /> : <AiIcons.AiOutlineExpandAlt size={22} />}
                </button>
            </div>
            <CodeMirror
                value={value}
                onBeforeChange={handleChange}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: theme
                }}
            />
        </div>
    )
}
