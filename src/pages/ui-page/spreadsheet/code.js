export const code = `
import { SpreadSheet } from 'h5ds-ui';

function DEMO() {

  // 组件销毁的时候触发，建议配合Modal使用
  const onDestroy = data => {
    console.log(data);
  };

  // 数据变化触发
  const onSeek = data => {
    console.log(data);
  };

  return (
    <SpreadSheet
      type="table"
      showToolbar={true}
      onDestroy={onChange}
      onSeek={onSeek}
      data={[
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
      ]}
    />
  );
}
`;
