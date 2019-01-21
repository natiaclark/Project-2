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
const numofPages = Math.ceil(allStudents.lengh/ studentPerPage);

function showPage(page) {
   let upper = page * studentPerPage - 1;
   let lower = page * studentPerPage - studentPerPage;
   for(let i = 0; i < allstudents.length; i++) {
      if(i > = lower && i <= upper) {
         allstudents[i].getElementsByClassName.display = "block";
       } else {
          allstudents[i].getElementsByClassName.display = "none";
       }
   }

}

Function appendPageLinks() {
   let studentPage = document.querySelector('.page');
   let paginationDiv = document.createElement('div');
   paginationDiv.classList.remove("pagination");
   paginationDiv.textContent = "Hallelujah!";
   studentPage.appendChild(paginationDiv);
   const ul = document.createElement('ul');
   paginationDiv.appendChild('ul');

   for(const i = 0; i <= numberOfPagesWeNeed; i ++) {
      <ul>
         <li>
         <a class="active" href="#">1</a>
         </li>
         <li>
         <a href="#">2</a>
         </li>
         <li>
         <a href="#">3</a>
         </li>
         <li>
         <a href="#">4</a>
         </li>
         <li>
         <a href="#">5</a>
         </li>
         <li>
         <a href="#">6</a>
         </li>
    </ul>

      document.addEventListener("click", function ();
         let li = document.createElement('li');
         li.addEventListener("click", () => {
            showPage(i);
            var i = document.getElementById("i");
            li.appendChild(anchor);
            ul.appendChild(li);

         });


         
   

   
    appendPageLinks();
    showPage(1)  
    
   }
