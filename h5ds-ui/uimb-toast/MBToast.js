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
            {/* <i className="uimb-toast-loading-icon h5font ico-loading2"></i> */}
            <svg
              className="uimb-toast-loading-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path
                d="M115.8318125 298.41875A448.03125 448.03125 0 0 0 62.0005625 512c0 248.540625 201.459375 450 450 450s450-201.459375 450-450S760.5411875 62 512.0005625 62a12.684375 12.684375 0 0 0 0 25.36875c234.534375 0 424.659375 190.125 424.659375 424.659375S746.5349375 936.6875 512.0005625 936.6875 87.3411875 746.5625 87.3411875 512.028125c0-71.353125 17.60625-140.146875 50.765625-201.54375a12.684375 12.684375 0 0 0-22.303125-12.065625z"
                fill="#ffffff"
              ></path>
            </svg>
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
            {/* <i className="h5font ico-luyinqueding"></i> */}
            <svg
              t="1597923102983"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path
                d="M391.161 865.561c-16 0-32-6.2-44-18.6l-329.7-338.5c-23.7-24.3-23.2-63.2 1.1-86.9 24.4-23.6 63.2-23.1 86.9 1.1l329.7 338.5c23.7 24.3 23.2 63.2-1.1 86.9-12 11.7-27.4 17.5-42.9 17.5z"
                fill="#ffffff"
              ></path>
              <path
                d="M391.161 865.561c-15.5 0-31-5.8-43-17.5-24.2-23.8-24.7-62.6-1-86.9l571.4-584.2c23.7-24.3 62.7-24.6 86.9-1 24.2 23.7 24.7 62.6 1 86.9l-571.4 584.2c-12 12.3-27.9 18.5-43.9 18.5z"
                fill="#ffffff"
              ></path>
            </svg>
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
            {/* <i className="h5font ico-guanbi"></i> */}
            <svg
              t="1597923133741"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path
                d="M582.4 512l224-224c19.2-19.2 19.2-51.2 0-70.4s-51.2-19.2-70.4 0l-224 224L288 224c-19.2-19.2-51.2-19.2-70.4 0s-19.2 51.2 0 70.4l224 217.6-224 224c-19.2 19.2-19.2 51.2 0 70.4 6.4 6.4 19.2 12.8 32 12.8s25.6-6.4 32-12.8l230.4-224 224 224c6.4 6.4 19.2 12.8 32 12.8s25.6-6.4 32-12.8c19.2-19.2 19.2-51.2 0-70.4L582.4 512z"
                fill="#ffffff"
              ></path>
            </svg>
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
