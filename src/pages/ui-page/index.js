import { dynamic } from '../../utils';

const Collapse = dynamic(import('./collapse'));
const ColorGroup = dynamic(import('./color-group'));
const Colors = dynamic(import('./colors'));
const Error = dynamic(import('./error'));
const FontSize = dynamic(import('./font-size'));
const ImgBox = dynamic(import('./img-box'));
const ImgList = dynamic(import('./img-list'));
const Item = dynamic(import('./item'));
const Loading = dynamic(import('./loading'));
const Mitem = dynamic(import('./mitem'));
const MusicPlayer = dynamic(import('./music-player'));
const SetRotate = dynamic(import('./set-rotate'));
const SliderGroup = dynamic(import('./slider-group'));
const SourceTags = dynamic(import('./source-tags'));
const SpreadSheet = dynamic(import('./spreadsheet'));
const Tags = dynamic(import('./tags'));
const MBModal = dynamic(import('./mb-modal'));
const UploadSource = dynamic(import('./upload-source'));
const Utils = dynamic(import('./utils'));
const CodeMirror = dynamic(import('./codeMirror'));

const routes = [
  { path: 'ui/collapse', exact: true, component: Collapse },
  { path: 'ui/colorGroup', exact: true, component: ColorGroup },
  { path: 'ui/colors', exact: true, component: Colors },
  { path: 'ui/error', exact: true, component: Error },
  { path: 'ui/fontSize', exact: true, component: FontSize },
  { path: 'ui/imgBox', exact: true, component: ImgBox },
  { path: 'ui/imgList', exact: true, component: ImgList },
  { path: 'ui/item', exact: true, component: Item },
  { path: 'ui/loading', exact: true, component: Loading },
  { path: 'ui/mitem', exact: true, component: Mitem },
  { path: 'ui/musicPlayer', exact: true, component: MusicPlayer },
  { path: 'ui/setRotate', exact: true, component: SetRotate },
  { path: 'ui/sliderGroup', exact: true, component: SliderGroup },
  { path: 'ui/sourceTags', exact: true, component: SourceTags },
  { path: 'ui/spreadSheet', exact: true, component: SpreadSheet },
  { path: 'ui/tags', exact: true, component: Tags },
  { path: 'ui/uimbModal', exact: true, component: MBModal },
  { path: 'ui/uploadSource', exact: true, component: UploadSource },
  { path: 'ui/utils', exact: true, component: Utils },
  { path: 'ui/codeMirror', exact: true, component: CodeMirror }
];

export { routes };
