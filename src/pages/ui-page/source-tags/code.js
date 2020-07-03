export const code = `
import { SourceTags } from 'h5ds-ui';

function DEMO() {
  return (
    <>
      <h3>系统资源标签</h3>
      <SourceTags scope="system" type="image" ajaxGet={ajaxGet} onChange={onChange} />
      <h3>用户资源标签</h3>
      <SourceTags
        scope="user"
        type="image"
        ajaxGet={ajaxGet}
        ajaxDelete={ajaxDelete}
        ajaxUpdate={ajaxUpdate}
        ajaxAdd={ajaxAdd}
        onChange={onChange}
      />
    </>
  );
}
`;
