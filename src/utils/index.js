/**
 * @Description 所有的工具类方法/公共类方法
 */

/**
 * 防抖方法
 * @param {function} fn 要执行的方法
 * @param {number} wait 几秒后才能重新调用
 * @param {boolean} immediate 是否立即调用
 * @returns {function} 返回封装后的函数，调用这个函数会防抖
 */
export const debounce = (fn, wait, immediate = false) => {
  let timer,
    startTimeStamp = 0;
  let context, args;
  let run = (timerInterval) => {
    timer = setTimeout(() => {
      let now = new Date().getTime();
      let interval = now - startTimeStamp;
      if (interval < timerInterval) {
        startTimeStamp = now;
        run(wait - interval);
      } else {
        if (!immediate) {
          fn.apply(context, args);
        }
        clearTimeout(timer);
        timer = null;
      }
    }, timerInterval);
  };
  return function () {
    context = this;
    args = arguments;
    let now = new Date().getTime();
    startTimeStamp = now;
    if (!timer) {
      if (immediate) {
        fn.apply(context, args);
      }
      run(wait);
    }
  };
};

/**
 * 设置本地缓存
 * @param {string} key 
 * @param {*} value 
 */
export const setStorage = (key,value) => {
	window.localStorage.setItem(key,JSON.stringify(value))
} 

/**
 * 获取本地缓存
 * @param {string} key 
 * @returns {*} 
 */
export const getStorage = (key) => {
	let value = null;
	const storageValue = window.localStorage.getItem(key);
	if(storageValue){
		value = JSON.parse(storageValue);
	}
	return value;
}

/**
 * 清除本地缓存
 * @param {string} key 
 */
export const removStorage = (key) =>{
  window.localStorage.removeItem(key)
}

/**
 * 获取token
 * @returns token
 */
export const getToken = () => {
  return getStorage("token")
}

/**
 * 设置token
 * @param {string} token 
 */
export const setToken = (token) => {
  setStorage("token",token)
}

/**
 * 清除token
 */
export const removeToken = () => {
  removStorage("token")
}