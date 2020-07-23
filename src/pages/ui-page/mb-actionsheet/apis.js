//  * hide, title, children, extra
export const apis = [
  {
    key: '1',
    params: 'title',
    tips: '标题',
    type: 'string | ReactNode',
    default: '-'
  },
  {
    key: '2',
    params: 'visible',
    tips: '隐藏或者显示弹窗',
    type: 'boolean',
    default: 'false'
  },
  {
    key: '3',
    params: 'onCancel',
    tips: '关闭弹窗的回调',
    type: 'Function',
    default: '-'
  },
  {
    key: '4',
    params: 'className',
    tips: '样式类名',
    type: 'string',
    default: '""'
  },
  {
    key: '5',
    params: 'children',
    tips: '内容',
    type: 'ReactDOM',
    default: '""'
  },
  {
    key: '6',
    params: 'zIndex',
    tips: 'z-index',
    type: 'number',
    default: '1000'
  },
  {
    key: '7',
    params: 'container',
    tips: '弹窗的容器',
    type: 'DOM',
    default: 'document.body'
  }
];
