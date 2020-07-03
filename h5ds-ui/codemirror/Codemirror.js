// code样式
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import { Controlled as CodeMirror } from 'react-codemirror2';
import React from 'react';

export default function CodemirrorRC({ value, options, onBeforeChange }) {
  return <CodeMirror value={value} onBeforeChange={onBeforeChange} options={options} />;
}
