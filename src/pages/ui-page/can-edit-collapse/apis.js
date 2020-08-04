//  * hide, title, children, extra
export const apis = [
  {
    key: '1',
    params: 'data',
    tips: '列表数据',
    type: 'array',
    default: '[]'
  },
  {
    key: '2',
    params: 'render',
    tips: '子数据渲染模块',
    type: 'Function',
    default: '-'
  },
  {
    key: '3',
    params: 'update',
    tips: '删除新增修改后会触发该方法',
    type: 'Function',
    default: '-'
  }
];
