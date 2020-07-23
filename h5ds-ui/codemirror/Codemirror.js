// code样式
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import { Controlled as CodeMirror } from 'react-codemirror2';
import React, { forwardRef, useRef, useImperativeHandle } from 'react';

function CodemirrorRC({ value, options, onBeforeChange }, ref) {
  const codemirrorRef = useRef();

  useImperativeHandle(ref, () => ({
    insertCode: code => {
      codemirrorRef.current.editor.replaceSelection(code);
    }
  }));

  return <CodeMirror ref={codemirrorRef} value={value} onBeforeChange={onBeforeChange} options={options} />;
}
export default forwardRef(CodemirrorRC);
