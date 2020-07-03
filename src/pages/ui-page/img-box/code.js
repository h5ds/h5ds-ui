export const code = `
import { ImgBox } from 'h5ds-ui';

function DEMO() {

  const onChange = (type, cropData, src, scale) => {
    console.log({ type, cropData, src, scale });
  };

  return (
    <div className="item">
      <ImgBox src="https://cdn.h5ds.com/static/images/logo3.png" onChange={onChange} />
    </div>
  );
}
`;
