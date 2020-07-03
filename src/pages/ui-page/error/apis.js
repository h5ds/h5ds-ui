//  * hide, title, children, extra
export const apis = [
  {
    key: '1',
    params: 'type',
    tips: '无图层(nolayer), 无页面(nopage), 404(404), 数据异常(data), 警告(warn)',
    type: 'string',
    default: '-'
  },
  {
    key: '2',
    params: 'theme',
    tips: '主题色，参数有dark | ""',
    type: 'string',
    default: ''
  },
  {
    key: '3',
    params: 'info',
    tips: '错误提示信息',
    type: 'string | ReactNode',
    default: '-'
  }
];
