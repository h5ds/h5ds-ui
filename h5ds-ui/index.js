import Box from './box';
import ColorGroup from './color-group';
import CropImg from './crop-img';
import Item from './item';
import Loading from './loading';
import SliderGroup from './slider-group';
import Collapse from './collapse';
import SetRotate from './set-rotate';
import Mitem from './mitem';
import Tags from './tags';
import ImgBox from './img-box';
import UploadSource from './upload-source';
import SourceTags from './source-tags';
import SourceLayout from './source-layout';
import MusicPlayer from './music-player';
import { util, LoadSource } from './utils';
import Errors from './errors';
import ImgList from './img-list';
import Colors from './colors';
import SpreadSheet from './spreadsheet';
import FontSize from './font-size';
import CodeMirror from './codemirror';

// 手机UI
import MBModal from './uimb-modal';
import MBActionSheet from './uimb-actionsheet';
import MBToast from './uimb-toast';

export const H5dsUI = {
  CodeMirror,
  Errors,
  FontSize,
  MusicPlayer,
  Box,
  SpreadSheet,
  ColorGroup,
  Colors,
  CropImg,
  Item,
  Loading,
  SliderGroup,
  Collapse,
  SetRotate,
  Mitem,
  Tags,
  SourceTags,
  SourceLayout,
  ImgBox,
  ImgList,
  UploadSource,
  util,
  LoadSource,
  // 手机UI
  MBModal,
  MBActionSheet,
  MBToast
};

export {
  CodeMirror,
  Errors,
  FontSize,
  MusicPlayer,
  Box,
  SpreadSheet,
  ColorGroup,
  Colors,
  CropImg,
  Item,
  Loading,
  SliderGroup,
  Collapse,
  SetRotate,
  Mitem,
  Tags,
  SourceTags,
  SourceLayout,
  ImgBox,
  ImgList,
  UploadSource,
  util,
  LoadSource,
  // 手机UI
  MBModal,
  MBActionSheet,
  MBToast
};

window.H5dsUI = H5dsUI;

export default H5dsUI;
