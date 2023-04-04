/*
 * const,let等の宣言変数
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数の上書き
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// let var2 = "let変数";
// console.log(var2);

// //let は上書き可能
// var2 = "let変数も上書き可能";
// console.log(var2);
// //letは再宣言できない

// const var3 = "const変数";
// console.log(var3);
// //constは上書きできない
// var3 = 2;

/*
 * テンプレート　バッククオートがポイント
 */
const name = "須田";
const age = 59;
const message = `私の名前は${name}です\n年齢は${age}才でじじいです`;
console.log(message);
