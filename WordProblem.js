const fileSystem = require("fs");
var arr = [];
var count = 0;
let reset = 0;
let set = 0;
let new_arr = [];
let ans = [];
fileSystem.readFile("./input_01.txt", "utf-8", (err, data) => {
  if (err) throw err;
  arr = data.split(/\r?\n/);
  for (let j = 0; j < arr.length; j++) {
    reset = 0;
    set = 0;
    count = 0;
    for (let i = 0; i < arr[j].length; i++) {
      if (arr.indexOf(arr[j].substr(reset, set + 1)) > -1) {
        if (arr.indexOf(arr[j].substr(reset, set + 2)) > -1) {
          reset = reset + set + 2;
          set = 0;
          count++;
        } else if (arr.indexOf(arr[j].substr(reset, set + 2)) === -1) {
          reset = reset + set + 1;
          set = 0;
          count++;
        }
      } else {
        set = set + 1;
      }
    }
    new_arr.push(count);
  }
  var max = Math.max.apply(null, new_arr);
  ans.push(arr[new_arr.indexOf(max)]);
  new_arr[new_arr.indexOf(max)] = -Infinity;
  var second_max = Math.max.apply(null, new_arr);
  ans.push(arr[new_arr.indexOf(second_max)]);
  console.log(`First Longest Compund word is: ${ans[0]}`);
  console.log(`Second Longest Compund word is: ${ans[1]}`);
});
