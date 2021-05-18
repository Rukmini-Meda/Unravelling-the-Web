//Query Selector
// Grabs the element with id = wrapper
$('#wrapper');
const wrap = document.querySelector('#wrapper');
console.log(wrap);
// using pseudo classes, tags and classes
const child = document.querySelector('#book-list li:nth-child(2) .name');
var books = document.querySelector('#book-list li .name');
console.log(books);
//You get only one because query selector finds the first one and returns us
//To get all, a small tweak is required
books = document.querySelectorAll('#book-list li .name');
console.log(books);
Array.from(books).forEach(function(item){
    console.log(item);
});

// Editing HTML & Inserting Text

var bookslist = document.querySelector('#book-list li .name');
Array.from(bookslist).forEach(function(book){
    console.log(book.textContent);
    // Text within an element
    book.textContent = 'test';
    book.textContent += ' appending';
});

const booklist = document.querySelector('#book-list');
// HTML within an element
console.log(booklist.innerHTML);

// replacing html elements
booklist.innerHTML = '<h1>Books and more books</h1>';
booklist.innerHTML += '<p>Append me</p>';

// DOM nodes
// Every single element in the DOM is a node
// Even a comment, attribute - those are nodes as well

const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is: ', banner.nodeType);
// Checkout the w3schools node types list in JS section
console.log('#page-banner node name is ', banner.nodeName);
console.log('#page-banner has child nodes: ', banner.hasChildNodes());
// You should pass true to get all the nested content as well
const clonnedBanner = banner.cloneNode(true);
console.log(clonnedBanner);
clonnedBanner = banner.cloneNode(false);
console.log(clonnedBanner);

// DOM traversal
const booklist1 = document.querySelector('#book-list');
// Finding parent node of a node
console.log('The parent node is: ', booklist1.parentNode);
console.log('The parent element is: ', booklist1.parentElement);
console.log('The parent element is: ', booklist1.parentElement.parentElement);

// Returns a collection of child nodes with line breaks as well that are there after every element
console.log(booklist.childNodes);
// To avoid linebreaks
console.log(booklist.children);
// Elements that are on the same level - siblings
// This gives line breaks as well since they are nodes as well
console.log('book-list next sibling is: ', booklist.nextSibling);
console.log('book-list next sibling is: ', booklist.nextElementSibling);
console.log('book-list previous sibling is: ', booklist.previousElementSibling);

booklist.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else';

// Event listeners
// call back function to call when the event happens

var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(event){
    // Which element is clicked
    console.log(event.target);
    console.log(event);
    console.log(event.shiftKey);
});

// Deleting an element from a ul list
var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(item){
    item.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        console.log("Deleted");
    });
});
// Prevents the 'a' tag to navigate to another page
const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target.textContent,' was prevented');
});
// Event bubbling
// If an event happens, then the parent element also fires its call back function if it has an event listener
// Delete books
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        list.removeChild(li);
    }
});
var forms = document.forms;
var f = form['add-book'];

// Add books to the list
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});




