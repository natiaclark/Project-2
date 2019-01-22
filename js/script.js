/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//select student-item and store in variable
const allstudents = document.querySelectorAll(".student-item");
const studentPerPage = 10;
const numofPages = Math.ceil(allstudents.length/ studentPerPage);

//show list of 10 students for each page.
//display list item for the list through a loop
function showPage(page) {
   let upper = page * studentPerPage - 1;
   let lower = page * studentPerPage - studentPerPage;
   for(let i = 0; i < allstudents.length; i++) {
      if(i >= lower && i <= upper) {
         allstudents[i].style.display = "block";
       } else {
          allstudents[i].style.display = "none";
       }
   }

}

//create a div with a class of "pagination".
//append page div.
//added an event listener to each tag when clicked the right showPage display and function with be selected
function appendPageLinks() {
   let studentPage = document.querySelector('.page');
   let paginationDiv = document.createElement('div');
   paginationDiv.classList.add("pagination");
   studentPage.append(paginationDiv);
   const ul = document.createElement('ul');
   paginationDiv.appendChild(ul);
   //add li tages to every page.
   for(let i = 1; i <= numofPages; i++) {
      
         let li = document.createElement('li');
         li.addEventListener("click", () => {
            showPage(i);
            });
          //page number text
         let a = document.createElement("a");
         a.setAttribute("href", "#");
         a.textContent = i;

         
         li.appendChild(a);
         ul.appendChild(li);

         }}
   //function called
    appendPageLinks();
    showPage(1)  
    
