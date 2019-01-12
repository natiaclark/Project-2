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
let student = document.querySelector('student-Item');
let page = document.querySelector('Page');
Console.log(page)


function showpage () {
    for(var i = 0; i < student.Lenght; i++) {
        student[i] . style.display = "none";
    }
}

showPage(student.pageNum = 0);
//number of pages 
  var pages = student.Lenght110

  //Define range from zero to 9
  let lower = pageNum *10;
  let upper = pageNum * 10 + (10-1);

  //page
  for(var i = 0; i  <= upper; i ++) {
    list(i). style.display = "block"
  }

  //Add functionality
//Creates space on DOM to add page buttons
  var pagination = document.createElement("div");
  //adding
  Page.appendchild(pagination);
  //
  innerHTML = "<button><1 button>"; 
  //add class of Pagination
  pagination.classname = "pagination";

  //add unorder list to new space for buttons
    var unorderlist = document.createElement('01')
    pagination.appendchild(unorderList);
//for every page add li tages with a page number
    for(let i = 0; i <= pagecount; i ++) {
      const li = document.createElement("li")
       unorderlist.appendChild(listitem);
     
      }
   





/***   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
