function Test(callback) {
  setTimeout(() => {
    callback("First async");
  }, 4000);
}
console.log("sync1");

setTimeout(() => {
  ((text) => {
    console.log(text+"güzel oldu");
  });Test
}, 1000);

console.log("sync2");
