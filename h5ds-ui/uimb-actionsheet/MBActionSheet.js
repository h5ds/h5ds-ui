import './uimb-actionsheet.less';
import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

/**
 * props: visible, onCancel
 */
function MBActionSheet({ title, visible, unclose, className, onCancel, children, zIndex, container }, ref) {
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

  useImperativeHandle(ref, () => ({
    onCancel: () => {
      onCancelThis();
    }
  }));

  if (visible) {
    $('body').addClass('uimb-noscroll');
  } else {
    $('body').removeClass('uimb-noscroll');
  }

  return ReactDOM.createPortal(
    <div
      className={classNames('uimb-actionsheet', className, {
        'uimb-actionsheet-visible': visible
      })}
      style={{ zIndex }}>
      <div
        className="uimb-actionsheet-mask"
        style={{
          opacity: show ? 1 : 0
        }}
        onClick={onCancelThis}></div>
      {visible && (
        <div
          className="uimb-actionsheet-content"
          style={{
            transform: `translateY(${show ? 0 : '100%'})`
          }}>
          {title && (
            <div className="uimb-actionsheet-title">
              {!unclose && <a onClick={onCancelThis} className="uimb-actionsheet-close mbfont iconmb-left"></a>}
              {title}
            </div>
          )}
          {children}
        </div>
      )}
    </div>,
    container || document.body
  );
}

export default forwardRef(MBActionSheet);
