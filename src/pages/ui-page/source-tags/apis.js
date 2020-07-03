/**
 * ajaxGet
 * ajaxUpdate
 * ajaxDelete
 * ajaxAdd
 * onChange
 * scope: system
 * type: image
 */
export const apis = [
  {
    key: '1',
    params: 'scope',
    tips: '系统标签or用户标签',
    type: 'string',
    default: 'system'
  },
  {
    key: '2',
    params: 'type',
    tips: '标签类型',
    type: 'string',
    default: 'image'
  },
  {
    key: '3',
    params: 'ajaxGet',
    tips: '获取标签',
    type: 'Promise',
    default: '-'
  },
  {
    key: '4',
    params: 'ajaxUpdate',
    tips: '更新标签',
    type: 'Promise',
    default: '-'
  },
  {
    key: '5',
    params: 'ajaxDelete',
    tips: '删除标签',
    type: 'Promise',
    default: '-'
  },
  {
    key: '6',
    params: 'ajaxAdd',
    tips: '添加标签',
    type: 'Promise',
    default: '-'
  },
  {
    key: '7',
    params: 'onChange',
    tips: '切换标签的回调函数',
    type: 'Function',
    default: '-'
  }
];
