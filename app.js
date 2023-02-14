let userInputs = [];

let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");
let checkYes = document.getElementById("yes");
let checkNo = document.getElementById("no");
const addBookBtn = document.querySelector(".add-book");
const displayLibrary = document.querySelector(".display-library");

function addBookToLibrary() {
  userInputs.push(bookTitle.value);
  userInputs.push(bookAuthor.value);
  userInputs.push(bookPages.value);
  if (checkYes.checked) {
    userInputs.push("Yes");
  } else if (checkNo.checked) {
    userInputs.push("No");
  }
  console.log(userInputs);
  const element = document.createElement("div");
  element.classList.add("list-entry");
  element.innerHTML = `<div class="entry-title1">${userInputs[0]}</div>
  <div class="entry-author1">${userInputs[1]}</div>
  <div class="entry-page1">${userInputs[2]}</div>
  <div class="entry-read1">${userInputs[3]}</div>
  <button class="edit-btn">Edit</button>
  <button class="delete-btn">Del</button>`;

  displayLibrary.appendChild(element);
  userInputs = [];
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookTitle.value = "";
  checkYes.checked = false;
  checkNo.checked = false;

  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function (e) {
    const element = e.currentTarget.parentElement;
    displayLibrary.removeChild(element);
    console.log("item deleted");
  });
}

addBookBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  addBookToLibrary();
});
