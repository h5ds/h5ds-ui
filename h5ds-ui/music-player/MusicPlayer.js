import './music-player.less';
import React, { Component } from 'react';
import { Slider } from 'antd';
import { Howl } from 'howler';
import { util } from '../utils';
import classNames from 'classnames';

/**
 * url,
 * name,
 * autoplay
 */
export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    // { name = '音乐.mp3', url }
    this.state = {
      duration: 0,
      nowTime: 0, // 当前播放的音乐
      playStatus: 'waiting'
    };

    this.soundInstance = null;
  }

  onAfterChange = val => {
    console.log(val);
    this.soundInstance.seek(val);
  };

  timeout = () => {
    this.timer = setTimeout(() => {
      if (this.state.nowTime > this.state.duration) {
        return;
      }
      this.setState(
        {
          nowTime: this.state.nowTime + 1
        },
        this.timeout
      );
    }, 1000);
  };

  doPlay = () => {
    if (this.state.playStatus === 'playing') {
      this.soundInstance.pause();
      this.setState({
        playStatus: 'pause'
      });
      return;
    }

    if (this.soundInstance) {
      this.soundInstance.seek(this.state.nowTime);
      this.soundInstance.play();
      this.setState({
        playStatus: 'playing'
      });
      this.timeout();
    }
  };

  setNowTime = val => {
    this.setState({ nowTime: val });
  };

  componentDidMount() {
    if (this.props.url) {
      const sound = new Howl({
        src: [this.props.url],
        autoplay: false,
        loop: false,
        volume: 1,
        onload: () => {
          console.log('onload!', sound, sound._duration);
          this.setState({
            duration: sound._duration,
            playStatus: 'pause'
          });
          this.soundInstance = sound;
          if (this.props.autoplay) {
            this.doPlay();
          }
        }
      });
      sound.on('pause', () => {
        if (this.timer) {
          clearTimeout(this.timer);
        }
      });
      sound.on('end', () => {
        this.setState({ nowTime: 0 });
        if (this.timer) {
          clearTimeout(this.timer);
        }
      });
      sound.on('stop', () => {
        if (this.timer) {
          clearTimeout(this.timer);
        }
      });
    } else {
      this.setState({
        playStatus: 'plan'
      });
    }
  }

  componentWillUnmount() {
    if (this.soundInstance) {
      this.soundInstance.unload();
    }
  }

  render() {
    const { duration, nowTime, playStatus } = this.state;

    let name = this.props.name;
    if (playStatus === 'plan') {
      name = 'ready';
    } else if (playStatus === 'waiting') {
      name = 'loading...';
    }

    return (
      <div className="h5-music-player">
        <div className="h5-music-do">
          <div className="h5-music-button">
            <i
              className={classNames('h5font', {
                'h5-muisc-waiting ico-bofang': ['waiting', 'plan'].includes(playStatus),
                'h5-muisc-playing ico-zanting': playStatus === 'playing',
                'h5-muisc-pause ico-bofang': playStatus === 'pause'
              })}
              onClick={this.doPlay}
            ></i>
          </div>
          <div className="h5-music-time">
            <div className="h5-music-time-number">
              <span>
                {util.formatTime(nowTime)} / {util.formatTime(duration)}
              </span>
              <div className="h5-music-name">{name}</div>
            </div>
            <div className="h5-music-time-slider">
              <Slider
                onAfterChange={this.onAfterChange}
                step={1}
                disabled={['waiting', 'plan'].includes(playStatus)}
                min={0}
                max={duration}
                value={nowTime}
                onChange={this.setNowTime}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
