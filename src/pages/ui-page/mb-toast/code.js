export const code = `
import { MBToast } from 'h5ds-ui';

function DEMO() {
  const loading = () => {
    const hide = MBToast.loading();
    setTimeout(() => {
      hide();
    }, 2000);
  };

  const success = () => {
    const hide = MBToast.success();
    setTimeout(() => {
      hide();
    }, 2000);
  };

  const error = () => {
    const hide = MBToast.error();
    setTimeout(() => {
      hide();
    }, 2000);
  };

  return (
    <UILayout code={code} apis={apis} info="超简单的弹窗，手机端用的">
      <>
        <Button onClick={loading}>loading</Button>
        <Divider type="vertical" />
        <Button onClick={success}>success</Button>
        <Divider type="vertical" />
        <Button onClick={error}>error</Button>
      </>
    </UILayout>
  );
}
`;
