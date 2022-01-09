/*
 * @Author: your name
 * @Date: 2022-01-08 23:01:30
 * @LastEditTime: 2022-01-09 15:05:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Algorithms-Data-Structures/反转字符串/index.js
 */

// 方法一
const reverse1 = (arr) => {
  //   if (!Array.isArray(arr)) return console.log("不是数组!");

  return arr.split("").reverse().join("");
};

// reverse([1, 2, 3, 4]);
// console.log(reverse1("15677"));

const reverse2 = (arr) => {
  let reverse = "";

  for (let character of arr) {
    reverse = character + reverse;
    // console.log(reverse);
  }

  console.log(reverse);
};

reverse2("123");

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
