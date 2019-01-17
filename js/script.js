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
const studentItem = document.getElementsByClassName('studentItem');
const a = studentItem .getElementsByClassName('href');
const pageDiv = document.querySelector('.pageDiv');
const button = document.querySelector('button')
const studentList = document.getElementsByTagName('li')[0];
const student = document.querySelectorAll('student-item');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const div = document.createElement('div');


//the size of the page
//the size of the page

studentList.addEventListener('click', () => {
   studentList.textContent = studentList.textContent.hide();

})

studentList.addEventListener('click', () => {
   studentList.textContent = studentList.textContent.show();

})



       
     
        
   
   


const appendPageLinks = (link) => {
   let pa
   
   
   
   
   function showPage(list) { 
   for(let i = 0; i < a.length; i++) {
       a[i].addEventListener("click", function() {
         const current = document.getElementsByClassName("active")
         current[0].className = current[0].className.replace("active", "");
         this.className += "active";
       });

       }

  //page
   //Define range from zero to 9
   let upper = page * 0;
   let lower = upper * - 10;
   for(const i = 0; i <= list.Length; i++) { 
      if( i >= lower && i <= upper){
     list(i). style.display = "block"
      }else {
       list(i). style.display = "none";
    
     }
  
 
   }
   
function showPage(studentItem)






  
//for every page add li tages with a page number
for(const i = 0; i < page; i ++) {
 const li = document.createElement("li")
  li.appendChild();   

  
     
//adding buttons

studentList.addEventListener('click', () => {
   if (pageDiv.style.display == 'none') {
      studentList.textcontent = 'hide list';
      listDiv.style.display = 'block';
   }  else {
      studentItem.textContent = 'show list'
      pageDiv.style.display = 'none';
   }

   addItemButton.addEventListener('click', () => {
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li');
      li.textContent = addItemInput.value;
      ul.appendChild(li); 
     
}); 


})};


   }}
