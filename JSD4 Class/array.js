/*1.ใช้จัดเก็บกลุ่มของข้อมูล : กลุ่มข้อความ,ตัวเลข,ค่าทางตรรกศาสตร์,object เพื่อสามารถจัดการข้อมูลขนาดใหญ่
2.ตัวแปรที่ใช้จัดเก็บกลุ่มข้อมูล : ใช้ชื่ออ้างอิงชื่อเดียวแต่มีindexกำกับเพื่อแยกตัวแปรแต่ละตัว
เช่น
let num1 = 1;
let num2 = 2;
let num3 = 3;
console.log(num1):
สังเกตุว่า1ตัวแปรเก็บค่าได้1ค่าถ้าต้องการจัดเก็บกลุ่มตัวเลขจำนวนมากจะต้องinputเยอะมาก
***ดังนั้นจึงมีการสร้างarrayขึ้นเพื่อเก็บกลุ่มข้อมูลจำนวนมากไว้เพียงในตัวแปรเดียว

วิธี 1 สร้างคำสั่ง array
let ชื่อarray = new Array();
let ชื่อarray = Array(สมาชิก1, สมาชิก2, ...)ว
เช่น
let myArray = new Array();
myArray[0] = 2000;
let days = Array("Suday", "Monday", "Tuesday");

let num1 = 1;
let num2 = 2;
let num3 = 3;
console.log(num1):
เปลี่ยนเป็น
let num = Array(1,2,3);
console.log(num); //output: 1 2 3
หากต้องการเข้าถึงสมาชิกในArrayให้อ้างอิงไปที่ชื่อตัวแปรใส่ก้ามปู[]แล้วระบุindexของสมาชิกนั้นๆโดย ลำดับ1=idexที่0
console.log("1st num = " , num[0]); //output: 1st num = 1

วิธี 2 ใช้ []
let colors =["red","green","blue"];
console.log(colors); //output; red green blue
console.log(colors[1]); //output; green
การเข้าถึงเพื่อเปลี่ยนค่า:
colors[0] = "yellow";
console.log(colors[0]); //output; yellow

let days = ["Sun","Mon","Tue","Wed","Tur","Fri","sat"];
console.log(days);
*/

const number = [3,4];
console.log (number); //[ 3, 4 ]

number.push(5,6);
console.log (number); //[ 3, 4, 5, 6 ]

number.unshift(1,2);
console.log (number); //[ 1, 2, 3, 4, 5, 6 ]

number.splice(2,0,'a','b');
console.log (number); //[ 1, 2, 'a', 'b', 3, 4, 5, 6 ]

const last = number.pop();
console.log (number);
console.log(last); //[ 1, 2, 'a', 'b', 7, 3, 4, 5 ] 6

const first = number.shift();
console.log (number);
console.log(first);//[ 2, 'a', 'b', 7, 3, 4, 5 ] 1

const middle = number.splice(1,2);
console.log(number);
console.log(middle); //[ 2, 7, 3, 4, 5 ] [ 'a', 'b' ]



let number = [1,2,3,1,4];
console.log (number);

number = [] //ถ้าเป็นคำสั่งletจะสามารถเปลี่ยนค่าarrayของตัวแปลได้
console.log(number) // []

onsole.log(number.indexOf(4));//4
console.log(number.indexOf('4'));//-1 แปลว่าไม่มีค่าในนั้น
console.log(number.lastIndexOf(1));//3
console.log(number.indexOf('4') !== -1);//false
console.log(number.includes(1)); //true
console.log(number.indexOf(1,2));//3 หาเลข1จากอินเด็กที่2เป็นต้นไป เจอเลข1ในอินเด็กที่3



const first = [1,2,3];
const second = [4,5,6];

//const combined = second.concat(first);
//console.log(combined); //[ 4, 5, 6, 1, 2, 3 ]

const combined =[...first,...second];
console.log(combined); //[ 1, 2, 3, 4, 5, 6 ]


// const slice = combined.slice(2); //เลือกให้คอมบายแสดงตั้งแต่อินเด็ก2ไปเรื่อยๆโดยไม่จำกัดอินเด็ก
// console.log(slice); //[ 3, 4, 5, 6 ]

const slice = combined.slice(2,4); //เลือกให้แสดงจากอินเด็ก2จนถึงก่อนอินเด็ก4
console.log(slice); //[ 3, 4 ]




const number = [3,2,1];
number.sort();
console.log(number); //[ 1, 2, 3 ]

number.reverse();
console.log(number); //[ 3, 2, 1 ]

