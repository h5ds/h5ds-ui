// width = 120, step = 0.1, min = 0, max = 1, value = 0, onChange, onAfterChange
export const apis = [
  {
    key: '1',
    params: 'width',
    tips: '组件宽度',
    type: 'number',
    default: '120'
  },
  {
    key: '2',
    params: 'step',
    tips: '每次变动的值',
    type: 'number',
    default: '0.1'
  },
  {
    key: '3',
    params: 'min',
    tips: '最小值',
    type: 'number',
    default: '0'
  },
  {
    key: '4',
    params: 'max',
    tips: '最大值',
    type: 'number',
    default: '1'
  },
  {
    key: '5',
    params: 'value',
    tips: '默认值',
    type: 'number',
    default: '0'
  },
  {
    key: '6',
    params: 'onChange',
    tips: '颜色变时的回调',
    type: 'Function',
    default: '-'
  },
  {
    key: '7',
    params: 'onAfterChange',
    tips: '颜色变后的回调',
    type: 'Function',
    default: '-'
  }
];
