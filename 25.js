//ย้ายข้างสมการ

// let a = 20;
// let b = 10;

// let c = a;  //c=20, a=20
// a = b; //a=10

// b = c; //b=20

// console.log(a, b);

// // จด เอาไว้โชว์เทพ ง่ายที่ไม่ง่าย หาค่า max min
// const array = [10,20,30,40,50];
// let maxArray = -99999;
// let minArray = 999999;

// for (let i = 0; i < array.length;i++){
//     if (array[i] > maxArray) {
//         maxArray = array[i];
//     }
//     if (array[i] < minArray) {
//         minArray = array[i];
//     }
// }
// console.log(maxArray, minArray);

//บวกเมทิก
// const matric = [
//     [1,2,3,4],
//     [5,6,7,8]
// ];

// const matric2 = [
//     [1,2,3,4],
//     [5,6,7,8]
// ];

// const result = [];

// for (let i = 0; i < matric.length;i++){
//     let arr = []
//     for (let j = 0; j < matric[i].length; j++){
//     let sum = matric[i][j] + matric2[i][j];
//     arr.push(sum);        
//     }
//     result.push(arr);
// }
// console.log(result);


//คัดพิมเล็ก พิมใหญ่
// let small = "d0OG123";
// let startUppercase = "A".charCodeAt(0);
// let endUppercase ="Z".charCodeAt(0);
// let startLowercase = "a".charCodeAt(0);
// let endLowercase = "z".charCodeAt(0);
// let startNumber = "0".charCodeAt(0);
// let endNumber = "9".charCodeAt(0);

// // A - Z 65 - 90
// // a - z 97 - 122

// // for (let i = 0; i < small.length; i++) {
// //     console.log(small[i]);
// // }

// let result = "";
// for (const item of small) {
//     // if (item.charCodeAt(0) >= startUppercase && item.charCodeAt(0) <= endUppercase) {
//     //     console.log(item);
//     // }
//     // if (item.charCodeAt(0) >= startLowercase && item.charCodeAt(0) <= endLowercase) {
//     //     console.log(item);
//     // }
//     if (item.charCodeAt(0) >= startNumber && item.charCodeAt(0) <= endNumber) {
//         console.log(item);
//     }
// }

// function generate(arr, n, min, max) {
//     for (let i = 0; i < n; i++) {
//         let random = Math.floor(Matn.random() * (max - min + 1) + min);
//         arr.push(random);
//     } 
// }

// let input = [];
// generate(input, 10);



//function shorthands
// const sum = () => 1+2;
// console.log(sum());


// const sum2 = () => {
//     return 1+2;
// }
// console.log(sum2());

// const sum3 = function(){
//     return 1+2;
// }
// console.log(sum3());



//จากมากไปน้อย จากน้อยไปมาก
// let s = ["sarun", "wefwefwefwoeifjoisajdpfiasdf", "sdfasdfasdfsad"];
// s.sort((a, b) => b.localeCompare(a));

// console.log(s);


// output => [ 'Prayut', 'Oreo', 'Meow', 'Jojo', 'Banglee' ]

// let s = ["sarun", "wefwefwefwoeifjoisajdpfiasdf", "sdfasdfasdfsad"];
// s.sort((a, b) => { 
//     return a.length > b.length;
//     // return b.localeCompare(a); 
// });
// console.log(s);