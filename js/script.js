/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
//the size of the page
//the size of the page
let student = document.querySelector('student-Item');
let page = document.querySelector('Page');
const button = document.querySelector('button.description')
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');


function showpage () {
    for(var i = 0; i < student.length; i++) {
        student[i] . style.display = "none";
        showpage(student.pageNum = 0)
   //page
    //Define range from zero to 9
  let upper = page * 0;
  let lower = upper * - 10;
  for(var i = 0; i <= student.Length; i++) { 
     if( i >= lower && i <= upper){
    list(i). style.display = "block"
     }else {
      list(i). style.display = "none";
   
    }
 

  }

   }
}


//Add functionality
//Creates space on DOM to add page buttons
  var pagination = document.createElement("div");
  var unorderlist = document.createElement('ul')
  //add class of Pagination
  pagination.classname = "pagination"; 


  //adding

//for every page add li tages with a page number
for(let i = 0; i <= pagecount; i ++) {
 const li = document.createElement("li")
  unorderlist.appendChild(listitem);   

  
  
      button.addEventListener('click', () => {
   package.innerHTML = input.value + ':';
   //adding buttons
 addItemButton.addEventListener('click', () => {
   let ul = doucument.getElementByTagName('ul')[0];
   let li = document.createElement('li');
   li.textContent = addItemInput.value;
   ul.appendChild(li);


});





/***   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
