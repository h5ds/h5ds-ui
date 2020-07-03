import { util } from './util';
import stores from '../store';
import { userService } from '../server';

// 删除url参数
function deleteUrlParam(keyName) {
  const { search, pathname, origin } = window.location;
  const arr = search.replace('?', '').split('&');
  const param = arr
    .map(d => {
      // eslint-disable-next-line no-unused-vars
      const [key, val] = d.split('=');
      if (keyName === key) {
        return false;
      } else {
        return d;
      }
    })
    .filter(d => d)
    .join('&');
  return `${origin}${pathname}${param ? '?' + param : ''}`;
}

// 第三方跳转认证
export async function oAuthToken(token = util.getUrlData('authorization'), keyName = 'authorization') {
  // 如果有认证码
  if (token) {
    stores.user.setToken(token);
    userService.setToken(token);
    const data = await userService.getUserDetail();
    stores.user.setUserInfo(data, token);
    const url = deleteUrlParam(keyName);
    window.history.pushState(null, null, url);
    return data ? token : false;
  } else {
    return false;
  }
}
