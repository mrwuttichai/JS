function myFunction() {
    let text;
    let person = prompt("What is your name?", "");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } 
    else {
      text = "Hello " + person;
    }
    document.getElementById("head").innerHTML = text;
  }