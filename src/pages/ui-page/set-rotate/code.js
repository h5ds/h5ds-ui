export const code = `
import { SetRotate } from 'h5ds-ui';

function DEMO() {

  const onChange = v => {
    console.log('change', v);
  };

  const changeEnd = v => {
    console.log('end', v);
  };

  return (
    <SetRotate value={0} onChange={onChange} changeEnd={changeEnd} />
  );
}
`;
