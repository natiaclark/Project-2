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
const allstudents = document.querySelectorAll(".student-item");
const studentPerPage = 10;
const numofPages = Math.ceil(allstudents.length/ studentPerPage);

function showPage(page) {
   let upper = page * studentPerPage - 1;
   let lower = page * studentPerPage - studentPerPage;
   for(let i = 0; i < allstudents.length; i++) {
      if(i >= lower && i <= upper) {
         allstudents[i].getElementsByClassName.display = "block";
       } else {
          allstudents[i].getElementsByClassName.display = "none";
       }
   }

}

function appendPageLinks() {
   let studentPage = document.querySelector('.page');
   let paginationDiv = document.createElement('div');
   paginationDiv.classList.add("pagination");
   studentPage.append(paginationDiv);
   const ul = document.createElement('ul');
   paginationDiv.appendChild(ul);

   for(let i = 1; i <= numofPages; i++) {
      
         let li = document.createElement('li');
         li.addEventListener("click", () => {
            showPage(i);
            });

         let a = document.createElement("a");
         a.setAttribute("href", "#");
         a.textContent = i;

         
         
         
         
            li.appendChild(a);
         ul.appendChild(li);

         }}
   
         appendPageLinks();
    showPage(1)  
    
