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
    params: 'onClose',
    tips: '关闭弹窗的回调',
    type: 'Function',
    default: '-'
  }
];
