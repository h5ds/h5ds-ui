import { encrypt, decrypt } from './crypto';

function safeGet(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

/**
 * 如果key = 'x-token' 或者 'x-user-info' 需要加密和解密。
 */
class WebStorage {
  constructor(storage) {
    // 用于加密字的符串
    this.SECRET_KEY = '7NlEQ@10';
    this._storage = storage;
  }

  randomID(randomLength = 8) {
    return Number(
      Math.random()
        .toString()
        .substr(3, randomLength) + Date.now()
    ).toString(36);
  }

  get(key) {
    let data = this._storage.getItem(key);
    // 解密
    if (key === 'x-token') {
      data = decrypt(data, this.SECRET_KEY);
    }
    return safeGet(data);
  }

  set(key, value) {
    let valueStr = JSON.stringify(value);
    // 加密
    if (key === 'x-token') {
      valueStr = encrypt(valueStr, this.SECRET_KEY);
    }
    this._storage.setItem(key, valueStr);
  }

  remove(key) {
    this._storage.removeItem(key);
  }

  clear() {
    this._storage.clear();
  }
}

class MemoryStorage {
  constructor() {
    this.$dataMap = new Map();
  }
  get(key) {
    this.$dataMap.get(key);
  }

  set(key, value) {
    this.$dataMap.set(key, value);
  }

  remove(key) {
    this.$dataMap.delete(key);
  }
}

class CookieStorage {
  get(key) {}

  set(key, value) {}

  remove(key) {}
}
export const storage = {
  local: new WebStorage(localStorage),
  session: new WebStorage(sessionStorage),
  memory: new MemoryStorage(),
  cookie: new CookieStorage()
};
