//  * hide, title, children, extra
export const apis = [
  {
    key: '1',
    params: 'src',
    tips: '图片的链接',
    type: 'string',
    default: '-'
  },
  {
    key: '2',
    params: 'onChange',
    tips: '快捷键点击后的回调',
    type: 'Function',
    default: '-'
  },
  {
    key: '3',
    params: 'setting',
    tips: '按钮配置',
    type: 'object',
    default: `{
      change: true,
      restore: true,
      crop: true,
      delete: true
    }`
  }
];
