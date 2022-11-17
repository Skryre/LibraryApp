const button = document.querySelector('button');
const checkbox = document.querySelector("input[type='checkbox']");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    return myLibrary.push(book);
}

checkbox.addEventListener("change",function(){
  this.value = this.checked ? "checked" : "unchecked";
})

button.addEventListener(`click`, (e)=> {
  e.preventDefault()
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  if (title === "" || author === "") {return}
  addBookToLibrary(title, author, pages, read)
  console.log(myLibrary)
})


