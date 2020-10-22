let name = {
  firstname: "usha",
  lastname: "punia",
};

let printName = function (abc) {
  console.log(this.firstname + " " + this.lastname + abc);
};

let printMyName = printName.bind(name);
printMyName();

Function.prototype.myBind = function (...args) {
  let obj = this;
  const params = args.slice(1);
  return function (...args2) {
    //obj.call(args[0]);
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName1 = printName.myBind(name, "a");
printMyName1();
