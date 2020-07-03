// size = 'normal', value = 'rgba(0,0,0,1)', onChange, callback, clear
export const apis = [
  {
    key: '1',
    params: 'value',
    tips: '颜色',
    type: 'color',
    default: 'rgba(0,0,0,1)'
  },
  {
    key: '2',
    params: 'onChange',
    tips: '颜色变后的回调',
    type: 'Function',
    default: '-'
  },
  {
    key: '3',
    params: 'size',
    tips: '组件尺寸',
    type: 'string | ReactNode',
    default: 'normal'
  },
  {
    key: '4',
    params: 'callback',
    tips: '弹窗关闭的回调',
    type: 'Function',
    default: '-'
  },
  {
    key: '5',
    params: 'clear',
    tips: '是否显示清除颜色按钮',
    type: 'boolean',
    default: '-'
  }
];
