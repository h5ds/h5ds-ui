export const code = `
import { CodeMirror } from 'h5ds-ui';

function DEMO() {
  return (
    <CodeMirror
      value="console.log('hello world!')"
      options={{
        tabSize: 4,
        mode: { name: 'javascript', json: true },
        theme: 'xq-light', // monokai
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        lineWrapping: true
      }}
    />
  );
}
`;
