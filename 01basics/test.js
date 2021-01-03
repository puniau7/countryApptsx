const state = {
  first: ["a", "b"],
  second: ["c"],
};

const newFirst = ["a", "d"];
state = { ...newFirst, ...newFirst };
