export const code = `
import { SliderGroup } from 'h5ds-ui';

function DEMO() {

  const onAfterChange = v => {
    console.log('变化后触发', v);
  };

  const onChange = v => {
    console.log('变化时', v);
  };

  return (
    <SliderGroup width={200} onChange={onChange} onAfterChange={onAfterChange} />
  );
}
`;
