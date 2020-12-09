// 手机UI
import MBModal from './uimb-modal';
import MBActionSheet from './uimb-actionsheet';
import MBToast from './uimb-toast';

// eslint-disable-next-line no-undef
const version = _VERSION_;

export const H5MBUI = {
  version,
  MBModal,
  MBActionSheet,
  MBToast
};

export {
  version,
  MBModal,
  MBActionSheet,
  MBToast
};

window.H5MBUI = H5MBUI;

export default H5MBUI;
