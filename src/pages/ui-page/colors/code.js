export const code = `
import { Colors } from 'h5ds-ui';

function DEMO() {

  const [data, setData] = useState([
    '#3aa1ff',
    '#88d1ea',
    '#36cbcb',
    '#82dfbe',
    '#4ecb73',
    '#acdf82',
    '#fbd437',
    '#eaa674',
    '#f2637b',
    '#dc81d2',
    '#975fe5'
  ]);

  return (
    <Colors data={data} onChange={setData} />
  );
}
`;
