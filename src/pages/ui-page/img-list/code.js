export const code = `
import { ImgList } from 'h5ds-ui';

function DEMO() {

  const [list, setList] = useState([
    {
      id: 1,
      url: 'https://cdn.h5ds.com/static/images/logo3.png'
    },
    {
      id: 2,
      url: 'https://cdn.h5ds.com/static/images/logo3.png'
    }
  ]);

  const clickImage = d => {
    console.log('点击图片后执行', d);
  };

  const onDelete = val => {
    console.log('删除图片', val);
    setList([...list.filter(d => d.id !== val.id)]);
  };

  return (
    <ImgList list={list} onDelete={onDelete} clickImage={clickImage} />
  );
}
`;
