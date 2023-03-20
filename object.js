

let Car = function (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function(name){
        console.log(`${name} is driving car `);
    };
    
};

let myCar = new Car('Nisan', 'A123', 2003);
console.log(myCar);
console.log(myCar.drive('Jack'));

let myCar1 = new Car('Honda', 'H435', 2010);
    console.log(myCar1);
    console.log(myCar1.drive('Jill'));

    
//

    let Car = function (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.drive = function(name){
            console.log(`${name} is driving car `);
            return `${name} is driving car`;
    
        };
        
    };
    
    let myCar = new Car('Nisan', 'A123', 2003);
    console.log(myCar);
    console.log(myCar.drive('Jack'));
    
    let myCar1 = new Car('Honda', 'H435', 2010);
    console.log(myCar1);
    console.log(myCar1.drive('Jill'));


    
let Coffee = function (เมนู, ประเภท, ขนาด){
    this.เมนู = เมนู;
    this.ประเภท = ประเภท;
    this.ขนาด = ขนาด;
    this.customer = function(name){
      console.log(`${name} กำลังดื่มกาแฟ `);
      return `${name}กำลังดื่มกาแฟ `;
    };
  }
  let myCoffee1 = new Coffee('ลาเต้', 'เย็น', 'แก้วใหญ่');
  console.log(myCoffee1);
  console.log(myCoffee1.customer('เต้'));
  
  for (let prop in myCoffee1) {
    console.log(myCoffee1[prop]);
  };
 /*output
 'เต้ กำลังดื่มกาแฟ '




Coffee {
  'เมนู': 'ลาเต้',
  'ประเภท': 'เย็น',
  'ขนาด': 'แก้วใหญ่',
  customer: ƒ (),
  __proto__: { constructor: ƒ Coffee() }
}
'เต้กำลังดื่มกาแฟ '
'ลาเต้'
'เย็น'
'แก้วใหญ่'
ƒ ()
*/


  
  let x =''
  const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  
  for (let i in myObj.cars) {
    x +=  `${myObj.cars[i].name}` + '\n';
    for (let j in myObj.cars[i].models) {
      x += '-' + myObj.cars[i].models[j] + '\n';
    }
  }
  
  /*output
'Ford
-Fiesta
-Focus
-Mustang
BMW
-320
-X3
-X5
Fiat
-500
-Panda
'
*/

function IceCreamMaking(flavor, type, toppings) {
    this.type = type;
    this.flavor = flavor;
    this.toppings = toppings;
  
    this.make = function () {
      return `${this.flavor.charAt(0).toUpperCase()}${this.flavor.slice(1)} ${
        this.type
      } served with ${this.toppings.slice(
        0,
        toppings.length - 1
      )} and ${this.toppings.slice(-1)}. 😉`;
    };
  }
  
  const vanillaFlavor = new IceCreamMaking("vanilla", "gelato", [
    "almond",
    "caramel suace",
  ]);
  
  // console.log(vanillaFlavor.make());
  
  // const mintChocChip = new IceCreamMaking("Mint Chocolate Chip", "ice cream", [
  //   "choclate sauce",
  //   "hazelnut",
  //   "cherry",
  // ]);
  
  // console.log(mintChocChip.make());
  
  // const strawberryYogurt = new IceCreamMaking("strawberry", "frozen yogurt", [
  //   "strawberry",
  //   "whipped cream",
  //   "strawberry sauce",
  // ]);
  
  // console.log(strawberryYogurt.make());
  
  //
  // function showProps(obj, objName) {
  //   let result = "";
  //   for (let i in obj) {
  //     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
  //     if (obj.hasOwnProperty(i)) {
  //       result += objName + "." + i + " = " + obj[i] + "\n";
  //     }
  //   }
  //   return result;
  // }
  // console.log(showProps(vanillaFlavor, "vanillaFlavor"));
  
  // function showProps2(obj, objName) {
  //   let result = "";
  //   for ([key, value] of Object.entries(obj)) {
  //     if (obj.hasOwnProperty(key)) {
  //       result += objName + "." + key + " = " + value + "\n";
  //     }
  //   }
  //   return result;
  // }
  // console.log(showProps2(vanillaFlavor, "vanillaFlavor"));