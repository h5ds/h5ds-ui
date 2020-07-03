export const code = `
import { Item } from 'h5ds-ui';

function DEMO() {
  return (
    <>
      <div className="item">
        <Item title="标题名字">内容</Item>
      </div>
      <div className="item">
        <Item title="标题名字" align="center">
          内容
        </Item>
      </div>
      <div className="item">
        <Item title="标题名字" info="提示信息" titleWidth={80}>
          内容
        </Item>
      </div>
      <div className="item">
        <Item>内容</Item>
      </div>
      <div className="item">
        <Item block={true} extra={<i className="h5font ico-zan" />} title="标题">
          内容
        </Item>
      </div>
      <div className="item">
        <Item size="small" title="标题">
          内容
        </Item>
      </div>
    </>
  );
}
`;
