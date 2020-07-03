import React, { Component } from 'react';
import './box.less';
import classNames from 'classnames';

/**
 * props:
 * hide, title, children, extra
 */
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultShow: props.hide,
      hide: props.hide
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.defaultHide !== props.defaultHide) {
      return Object.assign(state, { hide: props.hide });
    }
    return state;
  }

  clickIcon = () => {
    this.setState({ hide: !this.state.hide });
  };

  render() {
    const { title, children, extra } = this.props;
    return (
      <div className="ui-box">
        {extra ? <div className="ui-box-extra">{extra}</div> : null}
        <div
          className={classNames('ui-title', {
            'ui-icon-left': this.props.flodIconLeft
          })}
          onClick={this.clickIcon}
        >
          {title}
          <a
            className={classNames({
              'ui-box-show': !this.state.hide
            })}
          >
            <i className="fpsfont ico-down"></i>
          </a>
        </div>
        {!this.state.hide ? <div className="ui-content">{children}</div> : null}
      </div>
    );
  }
}
