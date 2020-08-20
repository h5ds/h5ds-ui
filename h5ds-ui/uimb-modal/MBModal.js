import './mb-modal.less';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM, { render } from 'react-dom';
import classNames from 'classnames';

/**
 * props: visible, onCancel
 */
function MBModal({
  visible,
  onCancel,
  className,
  children,
  zIndex = 1000,
  style = {},
  container,
  footer = false,
  title = '',
  onOk,
  noModalMaskEvent = false, // 去掉mask的点击事件
  noTransformAnimate = false // 去掉transform的动画
}) {
  const [show, setShow] = useState(visible);
  const timer = useRef();

  useEffect(() => {
    setShow(visible);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [visible]);

  const onCancelThis = () => {
    setShow(false);
    timer.current = setTimeout(() => {
      onCancel();
    }, 500);
  };

  if (visible) {
    $('body').addClass('uimb-noscroll');
  } else {
    $('body').removeClass('uimb-noscroll');
  }

  return ReactDOM.createPortal(
    <div
      className={classNames('uimb-modal', className, {
        'uimb-modal-visible': visible
      })}
      style={{ zIndex, ...style }}
    >
      <div
        className="uimb-modal-mask"
        style={{
          pointerEvents: noModalMaskEvent ? 'none' : 'initial',
          opacity: show ? 1 : 0
        }}
        onClick={onCancelThis}
      ></div>
      {visible && (
        <div
          className="uimb-modal-content"
          style={{
            transform: noTransformAnimate ? 'none' : `translateY(${show ? 0 : '100%'})`,
            opacity: show ? 1 : 0
          }}
        >
          {title && <div className="uimb-modal-title">{title}</div>}
          <div className="uimb-modal-body">{children}</div>
          {footer && (
            <div className="uimb-modal-footer">
              {onCancel && (
                <a className="uimb-modal-btn uimb-modal-btn-cancel" onClick={onCancelThis}>
                  取消
                </a>
              )}
              <a className="uimb-modal-btn" onClick={onOk}>
                确定
              </a>
            </div>
          )}
        </div>
      )}
    </div>,
    container || document.body
  );
}

function randomID(randomLength = 8) {
  return Number(
    Math.random()
      .toString()
      .substr(3, randomLength) + Date.now()
  ).toString(36);
}

MBModal.confirm = (params = {}) => {
  const id = `id_${randomID()}`;
  $(params.container || document.body)
    .addClass('uimb-noscroll')
    .append(`<div id="${id}"></div>`);
  const container = $(`#${id}`);

  // 动画
  const animateRun = show => {
    if (show) {
      container.find('.uimb-modal-mask').css({ opacity: 1 });
      container.find('.uimb-modal-content').css({
        opacity: 1,
        transform: params.noTransformAnimate ? 'none' : 'translateY(0)'
      });
    } else {
      container.find('.uimb-modal-mask').css({ opacity: 0 });
      container.find('.uimb-modal-content').css({
        opacity: 0,
        transform: params.noTransformAnimate ? 'none' : 'translateY(100%)'
      });
    }
  };

  // 销毁组件
  const destory = () => {
    animateRun(false);
    setTimeout(() => {
      $('body').removeClass('uimb-noscroll');
      container.remove();
      ReactDOM.unmountComponentAtNode(container[0]);
    }, 500);
  };

  // 关闭弹窗
  const onCancelThis = async () => {
    if (params.onCancel) {
      await params.onCancel();
    }
    destory();
  };

  const onOk = async () => {
    if (params.onOk) {
      await params.onOk();
    }
    destory();
  };

  setTimeout(() => {
    animateRun(true);
  });

  const { content, zIndex = 1000, title = '', className, noModalMaskEvent, noTransformAnimate, onCancel } = params;
  render(
    <div className={classNames('uimb-modal uimb-modal-confirm uimb-modal-visible', className)} style={{ zIndex }}>
      <div
        className="uimb-modal-mask"
        onClick={onCancelThis}
        style={{ opacity: 0, pointerEvents: noModalMaskEvent ? 'none' : 'initial' }}
      ></div>
      <div
        className="uimb-modal-content"
        style={{ opacity: 0, transform: noTransformAnimate ? 'none' : `translateY(100%)` }}
      >
        {title && <div className="uimb-modal-title">{title}</div>}
        <div className="uimb-modal-body">{content}</div>
        <div className="uimb-modal-footer">
          {onCancel && (
            <a className="uimb-modal-btn uimb-modal-btn-cancel" onClick={onCancelThis}>
              取消
            </a>
          )}
          <a className="uimb-modal-btn" onClick={onOk}>
            确定
          </a>
        </div>
      </div>
    </div>,
    container[0]
  );

  return destory;
};

export default MBModal;
