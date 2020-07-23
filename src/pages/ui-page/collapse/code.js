export const code = `
import { Collapse } from 'h5ds-ui';

function DEMO() {

  const onChange = v => {
    console.log('显示或隐藏面板', v);
  }

  return (
    <>
      <div className="item">
        <Collapse onChange={onChange} title="标题">Collapse的内容</Collapse>
      </div>
      <div className="item">
        <Collapse title="标题" visible={true}>
          Collapse的内容
        </Collapse>
      </div>
    </>
  );
}
`;
