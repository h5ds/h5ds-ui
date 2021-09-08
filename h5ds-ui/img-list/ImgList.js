import React, { useState, useReducer } from 'react';
import { Modal } from 'antd';
import './img-list.less';

export default function ImgList({ list, limit = 8, addButton, onChange, onReplace, onDelete, clickImage }) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const selectImage = () => {
    if (clickImage) {
      clickImage();
    }
    if (window.pubSubEditor) {
      window.pubSubEditor.publish('h5ds.imageModal.show', data => {
        onChange(data);
      });
    }
  };

  const changeImage = d => {
    if (window.pubSubEditor) {
      window.pubSubEditor.publish('h5ds.imageModal.show', data => {
        onReplace(data);
        d.url = data.url;
        forceUpdate();
      });
    }
  };

  return (
    <>
      <div className="ui-img-list">
        {list.map((d, i) => {
          return (
            <div key={d.id} className="ui-img-list-item">
              <div className="ui-img-list-item-hover">
                <span className="ui-img-list-icon">
                  {onDelete && <a onClick={() => onDelete(d)} className="h5font ico-shanchu"></a>}
                  <a
                    onClick={() => {
                      setPreviewImage(d.url);
                      setPreviewVisible(true);
                    }}
                    className="h5font ico-yanjing"></a>
                  <a onClick={() => changeImage(d)} className="h5font ico-huantu"></a>
                </span>
              </div>
              <div className="ui-img-list-item-inner">
                <img src={d.url} />
              </div>
            </div>
          );
        })}
        {list.length >= limit || !addButton ? null : (
          <div className="ui-img-list-item">
            <div onClick={selectImage} className="ui-img-list-item-inner">
              <a className="h5font ico-jia"></a>
            </div>
          </div>
        )}
      </div>
      <Modal visible={previewVisible} title="图片预览" footer={null} onCancel={() => setPreviewVisible(false)}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
}
