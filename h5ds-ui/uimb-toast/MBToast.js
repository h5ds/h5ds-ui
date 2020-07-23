import './uimb-toast.less';
import React, { useState } from 'react';
import MBModal from '../uimb-modal';

/**
 * props: visible, onCancel
 */
class MBToastCls {
  // 加载模块
  loading = text => {
    return MBModal.confirm({
      content: (
        <div>
          <div className="uimb-toast-icon">
            <i className="uimb-toast-loading-icon h5font ico-loading2"></i>
          </div>
          <div>{text || '加载中'}</div>
        </div>
      ),
      title: null,
      className: 'uimb-toast',
      noTransformAnimate: true,
      noModalMaskEvent: true
    });
  };

  success = text => {
    return MBModal.confirm({
      content: (
        <div>
          <div className="uimb-toast-icon">
            <i className="h5font ico-luyinqueding"></i>
          </div>
          <div>{text || '已完成'}</div>
        </div>
      ),
      title: null,
      className: 'uimb-toast',
      noTransformAnimate: true,
      noModalMaskEvent: true
    });
  };

  error = text => {
    return MBModal.confirm({
      content: (
        <div>
          <div className="uimb-toast-icon">
            <i className="h5font ico-guanbi"></i>
          </div>
          <div>{text || '失败了'}</div>
        </div>
      ),
      title: null,
      className: 'uimb-toast',
      noTransformAnimate: true,
      noModalMaskEvent: true
    });
  };
}

const MBToast = new MBToastCls();

export default MBToast;
