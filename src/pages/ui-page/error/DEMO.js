import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { Errors } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  return (
    <UILayout code={code} apis={apis} info="错误模块">
      <div className="item">
        <Errors info="错误信息" type="nolayer" />
      </div>
      <div className="item">
        <Errors info="错误信息" type="nopage" />
      </div>
      <div className="item">
        <Errors info="错误信息" type="404" />
      </div>
      <div className="item">
        <Errors info="错误信息" type="data" />
      </div>
      <div className="item">
        <Errors info="错误信息" type="warn" />
      </div>
      <div className="item" style={{ backgroundColor: '#141414' }}>
        <Errors info="错误信息" type="nolayer" theme="dark" />
      </div>
      <div className="item" style={{ backgroundColor: '#141414' }}>
        <Errors info="错误信息" type="nopage" theme="dark" />
      </div>
      <div className="item" style={{ backgroundColor: '#141414' }}>
        <Errors info="错误信息" type="404" theme="dark" />
      </div>
      <div className="item" style={{ backgroundColor: '#141414' }}>
        <Errors info="错误信息" type="data" theme="dark" />
      </div>
      <div className="item" style={{ backgroundColor: '#141414' }}>
        <Errors info="错误信息" type="warn" theme="dark" />
      </div>
    </UILayout>
  );
}
