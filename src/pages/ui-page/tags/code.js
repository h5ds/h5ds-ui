export const code = `
import { Tags } from 'h5ds-ui';

function DEMO() {

  const onChange = v => {
    console.log(v);
  };

  return (
    <Tags
      data={[
        { key: 1, value: 1, name: '标签1' },
        { key: 2, value: 2, name: '标签2' },
        { key: 3, value: 3, name: '标签3' },
        { key: 4, value: 4, name: '标签4' },
        { key: 5, value: 5, name: '标签5' }
      ]}
      onChange={onChange}
      value={1}
    />
  );
}
`;
