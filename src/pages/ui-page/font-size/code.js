export const code = `
import { FontSize } from 'h5ds-ui';

function DEMO() {
  const [size, setSize] = useState(12);
  return (
    <FontSize width={120} value={size} onChange={setSize} />
  );
}
`;
