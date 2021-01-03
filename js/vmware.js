let user = {
  name: "abc",
  age: 23,
  gender: "male",
  address: {
    line1: "abc street",
    line2: "abc city",
    line3: "state",
  },
};
let user1 = Object.create(user);

console.log(user.name); //abc
console.log(user.address.line1);
//user1.name='def'
//user1.address.line1='def street'
console.log("after", user1.name); //def
console.log("after", user1.address.line1); //abc street
console.log(user.address.line1); //def street
console.log(user1.hasOwnProperty("name"));
console.log(user.prototype);

function User(name, age, gender, address) {
  (this.name = name),
    (this.age = age),
    (this.gender = gender),
    (this.address = address);
}
let usernew = new User("abc", 23, "male", {});
console.log(usernew.prototype);
console.log(User.prototype);

//let arr="1,'usha',0,10,'10','punia'";
let arr = [1, "usha", 0, 10, "10", "punia", undefined, null, NaN];
//[1,0,10]
//['usha','10','punia']
//[1,0,10,'10']
let arrOnlynums = [];
let arrstr = [];
let arrnums = [];

arr.forEach((e1) => {
  if (typeof e1 !== "undefined" && e1 !== null) {
    if (typeof e1 === "number" && !isNaN(parseFloat(e1))) {
      arrnums.push(e1);
      arrOnlynums.push(e1);
    } else if (typeof e1 === "string") {
      if (isNumeric(e1)) {
        arrOnlynums.push(e1);
      }
      arrstr.push(e1);
    }
  }
});
console.log(arrnums, arrstr, arrOnlynums);

function isNumeric(str) {
  if (typeof str != "string") {
    return false;
  }
  return !isNaN(str) && !isNaN(parseFloat(str));
}
