import './cropimg.less';
import React, { useRef, useState, useEffect } from 'react';
import Mitem from '../mitem';
import { Button, Radio } from 'antd';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop'; // ...
import isEqual from 'react-fast-compare';
import { util } from '../utils';

export default function CropImg({ src, initCrop = {}, onChange, onCancel }) {
  const [crop, setCrop] = useState(Object.assign({ unit: 'px' }, { ...initCrop }));
  const [scale, setScale] = useState(null);

  const cropRef = useRef();

  const onChangeCrop = async newCrop => {
    if (!isEqual(crop, newCrop)) {
      const _img = await util.imgLazy(src);
      setCrop({
        ...newCrop,
        naturalWidth: _img.naturalWidth,
        naturalHeight: _img.naturalHeight
      });
    }
  };

  // 获取scale
  useEffect(() => {
    if (src) {
      const getImageScale = async () => {
        const _img = await util.imgLazy(src);
        const { clientWidth, clientHeight } = cropRef.current.componentRef;
        if (_img) {
          let scaleX = _img.naturalWidth / clientWidth;
          let scaleY = _img.naturalHeight / clientHeight;
          setCrop({
            unit: 'px',
            x: initCrop.x / scaleX,
            y: initCrop.y / scaleY,
            height: initCrop.height / scaleY,
            width: initCrop.width / scaleX,
            naturalWidth: _img.naturalWidth,
            naturalHeight: _img.naturalHeight
          });
          setScale([scaleX, scaleY]);
        }
      };
      getImageScale();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  // 回调函数
  const cropBack = () => {
    console.log('scale', scale);
    if (scale) {
      const [scaleX, scaleY] = scale;
      onChange(
        {
          x: crop.x * scaleX,
          y: crop.y * scaleY,
          width: crop.width * scaleX,
          height: crop.height * scaleY,
          naturalWidth: crop.naturalWidth,
          naturalHeight: crop.naturalHeight
        },
        src,
        scale
      );
    } else {
      console.error('资源还在加载中...');
    }
  };

  const onChangeRadio = async e => {
    const _img = await util.imgLazy(src);
    const [scaleX, scaleY] = scale;
    const height = _img.naturalHeight / scaleY;
    const width = _img.naturalWidth / scaleX;
    const minSize = height > width ? width : height;
    let newCrop = { unit: 'px', x: 0, y: 0 };
    switch (e.target.value) {
      case 1:
        Object.assign(newCrop, { height, width });
        break;
      case 2:
        {
          const $canvasView = $('.h5-canvas-view');
          Object.assign(newCrop, {
            height: $canvasView.height() / scaleY,
            width: $canvasView.width() / scaleX
          });
        }
        break;
      case 3:
        Object.assign(newCrop, { height: minSize, width: minSize * (3 / 4) });
        break;
      case 4:
        Object.assign(newCrop, { height: minSize * (3 / 4), width: minSize });
        break;
      case 5:
        Object.assign(newCrop, { height: minSize, width: minSize });
        break;
      case 6:
        Object.assign(newCrop, { height: minSize, width: minSize * (1 / 2) });
        break;
      case 7:
        Object.assign(newCrop, { height: minSize, width: minSize * (1 / 3) });
        break;
    }
    setCrop({
      ...newCrop,
      naturalWidth: _img.naturalWidth,
      naturalHeight: _img.naturalHeight
    });
  };

  return (
    <div className="ui-cropimg">
      <div className="ui-cropimg-box">
        <div className="ui-cropimg-inner">
          <ReactCrop ref={cropRef} src={src} crop={crop} onChange={onChangeCrop} />
        </div>
      </div>
      <div className="ui-cropimg-set">
        <Mitem title="剪切比例">
          <Radio.Group onChange={onChangeRadio} defaultValue={1}>
            <Radio value={1}>原图比例</Radio>
            <Radio value={2}>视图尺寸</Radio>
            <br />
            <Radio value={3}>4:3</Radio>
            <Radio value={4}>3:4</Radio>
            <br />
            <Radio value={5}>1:1</Radio>
            <Radio value={6}>1:2</Radio>
            <br />
            <Radio value={7}>1:3</Radio>
            {/* <Radio value={8}>自定义</Radio> */}
          </Radio.Group>
        </Mitem>
        <div>
          <Button onClick={onCancel}>取消</Button>
          &nbsp; &nbsp;
          <Button onClick={cropBack} type="primary">
            确定
          </Button>
        </div>
      </div>
    </div>
  );
}
