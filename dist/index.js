"use strict";
// ---------- 基本類型 -------------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let str = 'Yvonne';
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
let test = true;
// 陣列
let arr = ['a', 'b'];
let arr2 = [['aaa', 'bbb']];
// 元祖
let tuple = [1, 'a', true];
let tuple2 = [['a', 'b']];
//  ---------- Enum 枚舉 -------------
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const status1 = LiveStatus.SUCCESS;
console.log(status1);
//  ---------- Union ------------- 
let aaa;
aaa = 1000;
aaa = 'str';
let a1;
a1 = 999;
a1 = 'str';
let b1;
b1 = true;
const obj = {
    name: 'Yvonne',
    desc: '...',
};
//  ---------- function -------------
// 參數
// function hello () {}
function hello(a, b) {
    return a + b;
}
function hello2(a, b) {
    console.log(a, b);
    return 999;
}
function hello3(a, b, c) {
    return 100;
}
// undefined
function test2(a) {
    console.log(a);
}
function hello4(name, age) {
    // 有?的參數要放在最後
    // let a: number
    // a = age
    if (age === undefined)
        return -1;
    test2(age);
    return;
}
// 箭頭函式
const func = () => {
};
const fun2 = () => {
    return 1;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
const data1 = {
    "userId": 123,
    "id": 1,
    "title": "test",
    "completed": false
};
const beta = data1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQzs7Ozs7Ozs7OztBQUVoQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUE7QUFFbEIsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFBO0FBQ3RCLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQTtBQUN2QixJQUFJLENBQUMsR0FBUSxJQUFJLENBQUE7QUFDakIsSUFBSSxFQUFFLEdBQWEsU0FBUyxDQUFBO0FBRTVCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQTtBQUVwQixLQUFLO0FBRUwsSUFBSSxHQUFHLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDOUIsSUFBSSxJQUFJLEdBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBRXZDLEtBQUs7QUFDTCxJQUFJLEtBQUssR0FBNkIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3BELElBQUksTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFNUMsb0NBQW9DO0FBQ3BDLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUE7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVyQixtQ0FBbUM7QUFDbkMsSUFBSSxHQUFvQixDQUFDO0FBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUE7QUFDVixHQUFHLEdBQUcsS0FBSyxDQUFBO0FBT1gsSUFBSSxFQUFLLENBQUE7QUFDVCxFQUFFLEdBQUcsR0FBRyxDQUFBO0FBQ1IsRUFBRSxHQUFHLEtBQUssQ0FBQTtBQUVWLElBQUksRUFBSyxDQUFBO0FBQ1QsRUFBRSxHQUFHLElBQUksQ0FBQTtBQTBCVCxNQUFNLEdBQUcsR0FBVTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLEtBQUs7Q0FDZCxDQUFBO0FBRUQscUNBQXFDO0FBQ3JDLEtBQUs7QUFDTCx1QkFBdUI7QUFDdkIsU0FBUyxLQUFLLENBQUUsQ0FBUyxFQUFFLENBQVM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRWhCLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBRSxDQUFTLEVBQUUsQ0FBUztJQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQixPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBRSxDQUFTLEVBQUUsQ0FBVSxFQUFFLENBQVM7SUFDN0MsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDO0FBRUQsWUFBWTtBQUVaLFNBQVMsS0FBSyxDQUFFLENBQVM7SUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUUsSUFBWSxFQUFFLEdBQVk7SUFDdkMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBRVYsSUFBSSxHQUFHLEtBQUssU0FBUztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ1YsT0FBTTtBQUNWLENBQUM7QUFFRCxPQUFPO0FBQ1AsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBRWxCLENBQUMsQ0FBQTtBQUVELE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNkLE9BQU8sQ0FBQyxDQUFBO0FBQ1osQ0FBQyxDQUFBO0FBVUQsU0FBZSxPQUFPOztRQUNsQixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBVSxDQUFBO0lBQ3pDLENBQUM7Q0FBQTtBQUVELE1BQU0sS0FBSyxHQUFRO0lBQ2YsUUFBUSxFQUFFLEdBQUc7SUFDYixJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxNQUFNO0lBQ2YsV0FBVyxFQUFFLEtBQUs7Q0FDckIsQ0FBQTtBQUtELE1BQU0sSUFBSSxHQUFHLEtBQXdCLENBQUEifQ==