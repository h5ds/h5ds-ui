//  * hide, title, children, extra
export const apis = [
  {
    key: '1',
    params: 'list',
    tips: '图片列表',
    type: 'Array',
    default: '[]'
  },
  {
    key: '2',
    params: 'onDelete',
    tips: '删除图片后的回调',
    type: 'Function',
    default: '-'
  },
  {
    key: '3',
    params: 'clickImage',
    tips: '点击添加按钮后的回调',
    type: 'Function',
    default: '-'
  },
  {
    key: '4',
    params: 'onChange',
    tips: `只有图片资源的时候此方法才有效，window.pubSubEditor.publish('h5ds.imageModal.show', onChange)`,
    type: 'Function',
    default: '-'
  }
];
