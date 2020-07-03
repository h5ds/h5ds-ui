export const code = `
import { UploadSource } from 'h5ds-ui';

function DEMO() {

  const uploadStart = d => {
    console.log('uploadStart', d);
  };

  const uploadEnd = d => {
    console.log('uploadEnd', d);
  };

  const errorFun = err => {
    console.log('error', err);
  };

  const onChange = d => {
    console.log('onChange', d);
  };

  return (
    <UploadSource
      accept=".png,.jpg,.jpeg,.gif,.svg"
      types={['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml']}
      apiHost="/api/upload"
      token="token"
      maxSize={2}
      name="图片" // 请上传{{name}}文件
      uploadStart={uploadStart}
      uploadEnd={uploadEnd}
      onChange={onChange}
      error={errorFun}
    >
      <Button icon={<i className="h5font ico-jia" />}>图片上传</Button>
    </UploadSource>
  );
}
`;
