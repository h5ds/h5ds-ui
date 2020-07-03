import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { MusicPlayer } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  return (
    <UILayout code={code} apis={apis} info="音乐播放器">
      <div className="item">
        <MusicPlayer url="https://cdn.h5ds.com/static/music/loop2.mp3" name="音乐名称.mp3" autoplay={false} />
      </div>
    </UILayout>
  );
}
