// import CryptoJS from 'crypto-js';

function getNumArr(val, secretKey) {
  var num = '';
  secretKey.split('').forEach(d => {
    num += d.charCodeAt(0).toString();
  });
  while (num.length < val.length) {
    num += num;
  }
  return num.split('');
}

// 加密
export function encrypt(val, secretKey) {

  return val;

  // if (!val) {
  //   return val;
  // }
  // const numArr = getNumArr(val, secretKey);
  // let str = '';
  // val.split('').forEach((d, i) => {
  //   str += String.fromCharCode(d.charCodeAt(0) + parseInt(numArr[i], 10));
  // });
  // return str;
}

// 解密
export function decrypt(secretStr = '', secretKey) {
  return secretStr;
  // if (!secretStr) {
  //   return secretStr;
  // }
  // const numArr = getNumArr(secretStr, secretKey);
  // let str = '';
  // secretStr.split('').forEach((d, i) => {
  //   str += String.fromCharCode(d.charCodeAt(0) - parseInt(numArr[i], 10));
  // });
  // return str;
}
