/**
  accept,
  types,
  apiHost,
  token,
  maxSize = 2,
  name = '图片',
  uploadStart,
  uploadEnd,
  error,
  children,
  onChange
 */
export const apis = [
  {
    key: '1',
    params: 'accept',
    tips: '接受上传的文件类型',
    type: 'string',
    default: '.png,.jpg,.jpeg,.gif,.svg'
  },
  {
    key: '2',
    params: 'types',
    tips: '接受上传的文件类型校验',
    type: 'array',
    default: `['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml']`
  },
  {
    key: '3',
    params: 'apiHost',
    tips: '上传的地址',
    type: 'string',
    default: '-'
  },
  {
    key: '4',
    params: 'token',
    tips: 'header里面的token参数',
    type: 'string',
    default: '-'
  },
  {
    key: '5',
    params: 'maxSize',
    tips: '限制上传文件的大小，单位M',
    type: 'number',
    default: '2'
  },
  {
    key: '6',
    params: 'name',
    tips: '上传文件的类型名称，会提示“请上传{{name}}文件”',
    type: 'string',
    default: '图片'
  },
  {
    key: '7',
    params: 'uploadStart',
    tips: '上传文件之前的钩子',
    type: 'Function',
    default: '-'
  },
  {
    key: '8',
    params: 'uploadEnd',
    tips: '上传文件之后的钩子',
    type: 'Function',
    default: '-'
  },
  {
    key: '9',
    params: 'onChange',
    tips: '资源文件变化后的钩子',
    type: 'Function',
    default: '-'
  },
  {
    key: '10',
    params: 'error',
    tips: '上传之前校验数据错误的回调，比如文件大小，文件类型不正确',
    type: 'Function',
    default: '-'
  }
];
