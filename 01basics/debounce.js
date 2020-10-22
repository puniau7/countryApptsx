let counter = 0;
const getData = () => {
  console.log(`fetching data... ${cpunter++}`);
};

// const doMagic = function (fn, d) {
//   let timer;
//   let context = this,
//     args = arguments;
//   return function () {
//     clearInterval(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, ...args);
//     }, d);
//   };
// };

const doMagic = function (fn, d) {
  let context = this;
  let args = arguments;
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn.apply(context, ...args), d);
  };
};
function throttle(callback, timeLimit) {
  let waiting = false;
  let context = this;
  let args = arguments;
  if (!waiting) {
    callback.apply(context, ...args);
    waiting = true;
  }
  return function () {
    setTimeout(() => {
      waiting = false;
    }, timeLimit);
  };
}
const betterfun = doMagic(getData, 5000);
