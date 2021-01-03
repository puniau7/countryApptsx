export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (username == "Luke Skywalker" && password == "19BBY") {
      if (username == "usha" && password == "usha") {
        resolve();
      } else {
        reject();
      }
    });
  });
}
