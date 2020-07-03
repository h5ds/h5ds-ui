export const code = `
import { ColorGroup } from 'h5ds-ui';

function DEMO() {
  const [color, setColor] = useState('rgba(0,0,0,1)');
  return (
    <>
      <h3>正常模式</h3>
      <div>
        <ColorGroup value={color} onChange={setColor} />
      </div>
      <br />
      <h3>缩小模式</h3>
      <div>
        <ColorGroup clear={true} size="small" value={color} onChange={setColor} />
      </div>
    </>
  );
}
`;
