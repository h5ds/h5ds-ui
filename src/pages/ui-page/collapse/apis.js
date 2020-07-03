// title, children, checked, visible, onChange, contentStyle, size = 'normal'
import React from 'react';

export const apis = [
  {
    key: '1',
    params: 'title',
    tips: '标题',
    type: 'string | ReactNode',
    default: '""'
  },
  {
    key: '2',
    params: 'checked',
    tips: (
      <span>
        如果不为<a>undefined</a>表示需要显示开关，是否显示内容
      </span>
    ),
    type: 'boolean',
    default: 'false'
  },
  {
    key: '3',
    params: 'visible',
    tips: (
      <span>
        如果不为<a>undefined</a>表示不显示开关，是否显示内容
      </span>
    ),
    type: 'boolean',
    default: '-'
  },
  {
    key: '4',
    params: 'onChange',
    tips: <span>展开或者收起触发事件</span>,
    type: 'Function',
    default: '-'
  },
  {
    key: '5',
    params: 'contentStyle',
    tips: (
      <span>
        自定义<a>content</a>的样式
      </span>
    ),
    type: 'style',
    default: '-'
  },
  {
    key: '6',
    params: 'size',
    tips: (
      <span>
        尺寸大小，参数<a>normal</a> | <a>small</a>
      </span>
    ),
    type: 'string',
    default: 'normal'
  }
];
