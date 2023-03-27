// หา index ที่ id = 3
const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' },
    { id: 4, name: 'Football' }
  ];
  let foundIndex; 
  tasks.forEach((element, index) => {
      if(element.id === 3) {
          foundIndex = index
      }
    console.log(foundIndex); //output: 2
  })

  //another way
  const findIndex = arr => {
    let result
    for (let i = 0 ; i< arr.length; i++){
        if(arr[i].id === 3){
            result = i
        }
    }
    return result
  }
  console.log(findIndex(tasks)); //output: 2


  ///////////////////////////////
// หา index ที่ id = 3
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
  { id: 4, name: 'Football' }
];

function findIndex(arr,tay){
let index = arr.findIndex(e => e.id == 3)
tay(index)
}

function display(gg){
console.log(gg + ' hello tay kung')
}
findIndex(tasks, display)


  //////////////////////////////


  function doSomething(callback) {
    console.log("Doing something...");
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function executed!");
  }
  
  doSomething(callbackFunction)

  ///////////////////////////////

  //Complete the square sum function so that it squares each number passed into it and then sums the results together.
  //For example, for [1, 2, 2] it should return 9 

  const arr = [2,3,4];
  const result =
      arr.reduce((ac,cvalue)=>{
          console.log(ac${ac});
          console.log(cv${cvalue});
          return ac+cvalue**2;
      },0)
  
  console.log(result);

  ////

let input = [2,4,3]

let outPut = input.reduce(function (acc , cur){
  let sqrtSum = cur * cur
  return acc + sqrtSum
},0)

console.log(outPut)

////
let input = [2,4,3]
const squareSum = (int) => {
    let total = 0
    int.forEach(e => total += e**2)
    return total
  }
  squareSum(input)


  ////////////////////////////////
  const todos = [
    { id: 1, title: 'reading' , completed: false},
    { id: 2, title: 'workout' , completed: true},
    { id: 3, title: 'cooking' , completed: true},
    { id: 4, title: 'coding' , completed: false},
  ]
  
  // output
  // deleteTodo(2)
  // [
  //   { id: 1, title: 'reading' , completed: false},
  //   { id: 3, title: 'cooking' , completed: true},
  //   { id: 4, title: 'coding' , completed: false},
  // ]
  
  const deleteTodo = (arr, id) => {
      let index = arr.findIndex(e => e.id === id)
      const a = arr.splice(index,1)
      return arr;
  }
  console.log(deleteTodo(todos,2))