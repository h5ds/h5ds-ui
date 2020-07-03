import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { CodeMirror } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  return (
    <UILayout code={code} apis={apis} info="代码编辑器">
      <div className="item">
        <CodeMirror
          value="console.log('hello world!')"
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
    </UILayout>
  );
}
