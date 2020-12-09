import React, { useState, useEffect, useRef } from 'react'; // ...
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop'; // ...
import './crop-img.less';
import { util } from '../utils';
import isEqual from 'react-fast-compare';

/**
 * https://www.npmjs.com/package/react-image-crop
 * props:
 * @param {String} src
 * @param {Object} initCrop
 * {
      aspect: 1/2,
      unit: 'px', // default, can be 'px' or '%'
      x: 0,
      y: 0,
      width: 100,
      height: 100
    }
 * @param {Function} cropEnd
 * @param {Function} reset
 * @param {Function} deleteImg
 * @param {Function} changeSrc
 */
function CropImg({ src, initCrop = {}, cropEnd, reset, changeSrc, deleteImg, isBase64 }) {
  const [crop, setCrop] = useState(Object.assign({ unit: 'px' }, { ...initCrop }));
  const [scale, setScale] = useState(null);
  const boxRef = useRef();
  const imgRef = useRef();

  // 获取scale
  useEffect(() => {
    console.log('w cao ~', src);
    if (src) {
      const getImageScale = async () => {
        const _img = await util.imgLazy(src);
        imgRef.current = _img;
        const { clientWidth, clientHeight } = boxRef.current.componentRef;
        if (_img) {
          let scaleX = _img.naturalWidth / clientWidth;
          let scaleY = _img.naturalHeight / clientHeight;
          setCrop({
            unit: 'px',
            x: initCrop.x / scaleX,
            y: initCrop.y / scaleY,
            height: initCrop.height / scaleX,
            width: initCrop.width / scaleY,
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

  const setNewCrop = async newCrop => {
    if (!isEqual(crop, newCrop)) {
      // const _img = await util.imgLazy(src);
      setCrop({
        ...newCrop,
        naturalWidth: imgRef.current.naturalWidth,
        naturalHeight: imgRef.current.naturalHeight
      });
    }
  };

  // 回调函数
  const cropBack = () => {
    if (scale) {
      cropEnd(
        {
          x: crop.x * scale[0],
          y: crop.y * scale[1],
          width: crop.width * scale[0],
          height: crop.height * scale[1],
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

  const showImageSource = () => {
    window.pubSubEditor.publish('h5ds.img.modal.show', {
      callback: changeSrc
    });
  };

  return (
    <div className="ui-crop-img">
      <div className="ui-crop-box">
        <ReactCrop ref={boxRef} src={src} crop={crop} onChange={setNewCrop} />
      </div>
      <div className="ui-crop-btns">
        <a className="h5font ico-huantu1" onClick={showImageSource}></a>
        <a className="h5font ico-huantu" onClick={deleteImg}></a>
        {scale && <a className="h5font ico-jiandaocaijian" onClick={cropBack}></a>}
        {!isBase64 && (
          <span className="ui-crop-buttonr">
            <a className="h5font ico-shanchu" onClick={reset}></a>
          </span>
        )}
      </div>
    </div>
  );
}
export default CropImg;
