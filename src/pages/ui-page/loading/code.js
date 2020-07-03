export const code = `
import { Loading } from 'h5ds-ui';

function DEMO() {

  const [visible, setvisible] = useState(false);

  const show = () => {
    setvisible(true);
    setTimeout(() => {
      setvisible(false);
    }, 2000);
  };

  return (
    <>
      <Loading visible={visible} tips="loading..." />
      <Button onClick={show}>显示loading</Button>
    </>
  );
}
`;
