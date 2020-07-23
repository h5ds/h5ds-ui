export const code = `
import { MBModal } from 'h5ds-ui';

function DEMO() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>显示弹窗</Button>&nbsp;&nbsp;
      <Button onClick={() => MBModal.confirm({ onCancel: () => {} })}>confirm</Button>
      <MBModal title="标题" footer={true} visible={visible} onCancel={() => setVisible(false)}>
        固定的Modal内容
      </MBModal>
    </>
  );
}
`;
