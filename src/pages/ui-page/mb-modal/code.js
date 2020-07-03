export const code = `
import { MBModal } from 'h5ds-ui';

function DEMO() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>显示弹窗</Button>
      <MBModal title="标题" visible={visible} onClose={() => setVisible(false)}>
        固定的Modal内容
      </MBModal>
    </>
  );
}
`;
