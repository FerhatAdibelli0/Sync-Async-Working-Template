function Test(name) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name + "First async");
    }, 4000);
  });
  return promise;
}
console.log("sync1");

setTimeout(() => {
  Test("Ferhat")
    .then((data) => {
      console.log(data);
      return Test("Adıbelli");
    })
    .then((data2) => {
      console.log(data2);
    });
}, 1000);

console.log("sync2");
