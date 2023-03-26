//Convert Kelvin to Celsius, then to Fahrenheit and then to Newton

 // Set kelvin equal to 293 Kelvin .
 const kelvin = 293;
 // convert Kelvin to Celsius by create celsius variable and store a value of 293-273
 const celsius = kelvin - 273;
 console.log(`The temperature is ${celsius} degrees Celsius.`);
 // convert celsius to fahrenheit by create fahrenheit variable using let keyword that can be reassigned a different value.
 let fahrenheit = celsius * (9/5) + 32;
 // to round down a decimal number use Math.floor() method
 fahrenheit = Math.floor(fahrenheit);
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
 //Insert fahrenheit variables into strings using template literals
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
 //convert Celcius to Newton
 let newton = celsius * (33/100);
 newton = Math.floor(newton);
 console.log(`The temperature is ${newton} degrees Newton.`);

/*
Output:
The temperature is 20 degrees Celsius.
The temperature is 68 degrees Fahrenheit.
The temperature is 68 degrees Fahrenheit.
The temperature is 6 degrees Newton.
*/