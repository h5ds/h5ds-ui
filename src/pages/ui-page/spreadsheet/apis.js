//  * hide, title, children, extra
export const apis = [
  {
    key: '1',
    params: 'type',
    tips: '表格编辑器类型，默认是table',
    type: 'string',
    default: 'table'
  },
  {
    key: '2',
    params: 'showToolbar',
    tips: '是否显示工具栏',
    type: 'boolean',
    default: 'false'
  },
  {
    key: '3',
    params: 'onDestroy',
    tips: '销毁后的回调，建议和Modal配合使用',
    type: 'Function',
    default: '-'
  },
  {
    key: '4',
    params: 'onSeek',
    tips: '变后的回调',
    type: 'Function',
    default: '-'
  }
];
