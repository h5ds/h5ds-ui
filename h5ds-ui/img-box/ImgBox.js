import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './img-box.less';
import { util } from '../utils';
import { Modal } from 'antd';
import CropImg from './CropImg';

function ImgBox({ src, onChange }, ref) {
  const [visibleModal, setVisibleModal] = useState(false);

  // 提供给外部的ref使用，ref.current.func()
  useImperativeHandle(ref, () => ({
    setVisibleModal: val => setVisibleModal(val)
  }));

  // 还原图片
  const restoreImage = () => {
    onChange('restore', util.imgLazy(src));
  };

  // 替换图片 ///
  const changeImage = () => {
    onChange('change');
  };

  const deleteImage = () => {
    onChange('delete');
  };

  const cropEnd = (cropData, src, scale) => {
    onChange('crop', cropData, src, scale);
  };

  return (
    <div className="ui-imgbox">
      <div className="ui-imgbox-img">
        <img src={src} alt="" />
      </div>
      <div className="ui-imgbox-btns">
        <a title="替换图片" onClick={changeImage} className="h5font ico-huantu1"></a>
        <a title="还原图片" onClick={restoreImage} className="h5font ico-huantu"></a>
        <a title="裁剪图片" onClick={() => setVisibleModal(true)} className="h5font ico-jiandaocaijian"></a>
        <a title="删除图片" onClick={deleteImage} className="h5font ico-shanchu"></a>
      </div>
      <Modal
        width={900}
        className="ui-modal ui-modal-full"
        footer={null}
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
      >
        <CropImg src={src} onChange={cropEnd} />
      </Modal>
    </div>
  );
}

export default forwardRef(ImgBox);
