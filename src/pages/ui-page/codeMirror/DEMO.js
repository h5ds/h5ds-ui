import React, { useRef, useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { CodeMirror } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';
import { Button } from 'antd';

export default function Example() {
  const codeRef = useRef();
  const [str, setStr] = useState(`console.log('hello world!')`);

  // 光标处插入代码
  const insert = () => {
    codeRef.current.insertCode('xxxxxxx');
  };

  const changeCode = (editor, data, value) => {
    setStr(value);
  };

  return (
    <UILayout code={code} apis={apis} info="代码编辑器">
      <div className="item">
        <CodeMirror
          ref={codeRef}
          value={str}
          onBeforeChange={changeCode}
          options={{
            tabSize: 4,
            mode: { name: 'javascript', json: true },
            theme: 'monokai', // monokai
            styleActiveLine: true,
            lineNumbers: true,
            line: true,
            lineWrapping: true
          }}
        />
      </div>
      <br />
      <Button onClick={insert}>插入代码</Button>
    </UILayout>
  );
}
