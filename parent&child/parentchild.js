const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name'); // access to indivdual child to modify the text content
console.log(gJavascript);
gJavascript.innerHTML = 'Advanced JAVASCRIPT!!';

const readingList = document.querySelectorAll('#reading-list li .name'); //access all children to add text content to the end of each child
readingList.forEach(function(list){
	console.log(list.textContent);
	list.textContent += ' book title: ';
})

//list.textContent = 'book title : ' + list.textContent 2ท่านี้สามารถทำได้เหมือนกัน
//list.textContent = `book title: ${list.textContent} `;


//Interacting with Form -- add readinglist
const addForm = document.forms["add-list"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent from refresh
  const value = addForm.querySelector('input[type="text"]'); //add new reading list in the text box
  //   console.log(value);
  //create element
  let li = document.createElement("li");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  //add content
  span1.textContent = `book title: ${value.value} `;
  span2.textContent = "delete";
  //add classes
  span1.classList.add("name");
  span2.classList.add("delete");
  //append to DOM
  list.appendChild(li);
  li.appendChild(span1);
  li.appendChild(span2);
  value.value = "";
});


//delete
const list = document.querySelector('#reading-list ul');
list.addEventListener('click',function(e){
    if (e.target.className == 'delete'){
        const li =e.target.parentElement;
        list.removeChild(li);
    }
})   

// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
   // console.log(value);

// //create element
const li = document.createElement('li');
const ReadingListName = document.createElement('span');
const deleteBtn = document.createElement('span');

// //add content
deleteBtn.textContent = 'delete';
ReadingListName.textContent = value; 

// //add classes
ReadingListName.classList.add('name');
deleteBtn.classList.add('delete');


// //append to DOM
li.appendChild(ReadingListName);
li.appendChild(deleteBtn);
list.appendChild(li); //create but not context 

});