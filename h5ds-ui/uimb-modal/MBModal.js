import React, { Component } from 'react';
import './mb-modal.less';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class MBModal extends Component {
  getRenderDOM = ({
    title,
    className,
    zIndex = 1000,
    visible,
    onClose,
    height = 400,
    width = '90%',
    downClose,
    children,
    noMargin,
    container
  }) => {
    return ReactDOM.createPortal(
      <div className={classNames('uimb-modal', className)} style={{ zIndex, display: visible ? 'flex' : 'none' }}>
        <div className="uimb-modal-bodyer-bg" onClick={onClose}></div>
        <div
          className="uimb-modal-bodyer"
          style={{ height, width, animation: '0.5s ease 0s 1 normal forwards running fadeInDown' }}
        >
          <a
            className={classNames({ 'uimb-modal-close': !downClose, 'uimb-modal-downclose': downClose })}
            onClick={onClose}
          >
            &times;
          </a>
          <div className="uimb-modal-content">
            {title && <div className="uimb-modal-title">{title}</div>}
            <div className="uimb-modal-children" style={{ margin: noMargin ? 0 : '0 15px', height: height - 51 }}>
              {children}
            </div>
          </div>
        </div>
      </div>,
      container || document.body
    );
  };

  render() {
    return this.getRenderDOM(this.props);
  }
}

export default MBModal;
