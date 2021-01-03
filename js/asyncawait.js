function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 4000);
  });
}

async function f1() {
  console.log("hi"); // 10
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
  console.log("hi1");
}

f1();
console.log("hi2");
//If the Promise is rejected, the rejected value is thrown.
async function f4() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.error(e); // 30
  }
}

f4();

//////// Handle rejected Promise without try block.
var response = await promisedFunction().catch((err) => {
  console.error(err);
});
// response will be undefined if the promise is rejected
