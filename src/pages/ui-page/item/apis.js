//  * hide, title, children, extra
export const apis = [
  {
    key: '1',
    params: 'title',
    tips: '标题',
    type: 'string | ReactNode',
    default: ''
  },
  {
    key: '2',
    params: 'titleWidth',
    tips: '标题宽度',
    type: 'number',
    default: '60'
  },
  {
    key: '3',
    params: 'info',
    tips: '提示信息',
    type: 'string',
    default: ''
  },
  {
    key: '4',
    params: 'extra',
    tips: '右上角模块',
    type: 'string | ReactNode',
    default: '-'
  },
  {
    key: '5',
    params: 'block',
    tips: '标题是否占满整行',
    type: 'boolean',
    default: 'false'
  },
  {
    key: '6',
    params: 'className',
    tips: '类名',
    type: 'string',
    default: ''
  },
  {
    key: '7',
    params: 'size',
    tips: '如果Item放到Collapse，这里size使用small',
    type: 'string',
    default: 'normal'
  }
];
