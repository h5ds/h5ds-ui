import { dynamic } from '../../utils';

const Collapse = dynamic(import('./collapse'));
const ColorGroup = dynamic(import('./color-group'));
const Colors = dynamic(import('./colors'));
const Error = dynamic(import('./error'));
const FontSize = dynamic(import('./font-size'));
const ImgBox = dynamic(import('./img-box'));
const ImgList = dynamic(import('./img-list'));
const Item = dynamic(import('./item'));
const CanEditCollapse = dynamic(import('./can-edit-collapse'));
const Loading = dynamic(import('./loading'));
const Mitem = dynamic(import('./mitem'));
const MusicPlayer = dynamic(import('./music-player'));
const SetRotate = dynamic(import('./set-rotate'));
const SliderGroup = dynamic(import('./slider-group'));
const SourceTags = dynamic(import('./source-tags'));
const SpreadSheet = dynamic(import('./spreadsheet'));
const Tags = dynamic(import('./tags'));
const UploadSource = dynamic(import('./upload-source'));
const Utils = dynamic(import('./utils'));
const CodeMirror = dynamic(import('./codeMirror'));
const GradientColors = dynamic(import('./gradient-colors'));

// 手机UI
const MBModal = dynamic(import('./mb-modal'));
const MBActionSheet = dynamic(import('./mb-actionsheet'));
const MBToast = dynamic(import('./mb-toast'));

const routes = [
  { path: 'ui/collapse', name: 'Collapse 折叠面板', exact: true, component: Collapse },
  { path: 'ui/colorGroup', name: 'ColorGroup 颜色库', exact: true, component: ColorGroup },
  { path: 'ui/colors', name: 'Colors 颜色组', exact: true, component: Colors },
  { path: 'ui/gradientColors', name: 'GradientColors 渐变颜色', exact: true, component: GradientColors },
  { path: 'ui/error', name: 'Error 错误模块', exact: true, component: Error },
  { path: 'ui/fontSize', name: 'FontSize 文字大小', exact: true, component: FontSize },
  { path: 'ui/imgBox', name: 'ImgBox 图片盒子', exact: true, component: ImgBox },
  { path: 'ui/imgList', name: 'ImgList 图表列表', exact: true, component: ImgList },
  { path: 'ui/item', name: 'Item 模块', exact: true, component: Item },
  { path: 'ui/canEditCollapse', name: 'CanEditCollapse 可编辑面板', exact: true, component: CanEditCollapse },
  { path: 'ui/loading', name: 'Loading 加载', exact: true, component: Loading },
  { path: 'ui/mitem', name: 'Mitem 模块2', exact: true, component: Mitem },
  { path: 'ui/musicPlayer', name: 'MusicPlayer 音乐播放器', exact: true, component: MusicPlayer },
  { path: 'ui/setRotate', name: 'SetRotate 旋转', exact: true, component: SetRotate },
  { path: 'ui/sliderGroup', name: 'SliderGroup 滚动条', exact: true, component: SliderGroup },
  { path: 'ui/sourceTags', name: 'SourceTags 资源库标签', exact: true, component: SourceTags },
  { path: 'ui/spreadSheet', name: 'SpreadSheet 表格编辑', exact: true, component: SpreadSheet },
  { path: 'ui/tags', name: 'Tags 标签组', exact: true, component: Tags },
  { path: 'ui/uploadSource', name: 'UploadSource 资源上传', exact: true, component: UploadSource },
  { path: 'ui/utils', name: 'utils 插件库', exact: true, component: Utils },
  { path: 'ui/codeMirror', name: 'CodeMirror 代码编辑', exact: true, component: CodeMirror },
  // 手机UI
  { path: 'ui/uimbModal', name: 'MBModal 手机弹窗', exact: true, component: MBModal },
  { path: 'ui/uimbToast', name: 'MBToast 轻提示', exact: true, component: MBToast },
  { path: 'ui/uimbActionsheet', name: 'MBActionsheet 模态弹出框', exact: true, component: MBActionSheet }
];

export { routes };
