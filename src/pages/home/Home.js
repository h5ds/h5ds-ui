import './home.less';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CodeMirror } from '../../../h5ds-ui';
import { code } from './code';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <h1>H5DS-UI组件库</h1>
        <p>专门提供给H5DS编辑器的UI库</p>
        <p>欢迎加入QQ群：549856478</p>
        <div>
          <CodeMirror
            value={code}
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
        </div>
      </div>
    );
  }
}

export default HomePage;
