export const code = `
import { MBActionSheet } from 'h5ds-ui';

function DEMO() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>显示弹窗</Button>&nbsp;&nbsp;
      <MBActionSheet title="标题" visible={visible} onCancel={() => setVisible(false)}>
        <div style={{ height: 400 }}>固定的Modal内容</div>
      </MBActionSheet>
    </>
  );
}
`;
