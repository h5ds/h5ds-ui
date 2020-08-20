import React from 'react';
import { Upload, message } from 'antd';
import './upload-source.less';

/**
 *
 * @param {*} param0
 * accept: ".png,.jpg,.jpeg,.gif,.svg"
 * types: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml']
   children: <Button icon={<i className="h5font ico-jia" />}>图片上传</Button>
 *
 */
export default function UploadSource({
  accept = '.png,.jpg,.jpeg,.gif,.svg',
  types = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml'],
  apiHost,
  token,
  maxSize = 2,
  name = '图片',
  uploadStart,
  uploadEnd,
  error,
  children,
  onChange
}) {
  const beforeUpload = file => {
    if (uploadStart) {
      uploadStart(file);
    }
    console.log('file.type', file.type);
    const isJpgOrPng = types.includes(file.type);
    if (!isJpgOrPng) {
      message.error(`请上传${name}文件`);
    }
    const isLt2M = file.size / 1024 / 1024 < maxSize;
    if (!isLt2M) {
      message.error(`${name}大小不能超过${maxSize}MB!`);
    }

    if ((!isJpgOrPng || !isLt2M) && error) {
      error({ isJpgOrPng, isLt2M });
    }

    return isJpgOrPng && isLt2M;
  };

  const onChangeValue = info => {
    if (onChange) {
      onChange(info);
    }
    if (info.file.status === 'done') {
      uploadEnd(info.file.response);
    }
  };

  return (
    <Upload
      accept={accept}
      className="ui-upload"
      {...{
        beforeUpload: beforeUpload,
        multiple: true,
        showUploadList: false,
        name: 'file',
        action: `${apiHost}/common/upload`,
        headers: { Authorization: token },
        onChange: onChangeValue
      }}
    >
      {children}
    </Upload>
  );
}
