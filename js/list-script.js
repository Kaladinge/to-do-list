const h1 = document.querySelector('h1');
const title = document.querySelector('title');

const form = document.querySelector('form');

const ul = document.querySelector('ul');

const button = document.querySelector('button');

const input = document.getElementById('item');

const infoText = document.getElementById('info-text')


/* Settin title and header */

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const categoryName = params.get("name");

h1.innerHTML = categoryName;
title.innerHTML = categoryName;



let itemsArray = localStorage.getItem(categoryName)
    ?
    JSON.parse(localStorage.getItem(categoryName))
    : []

console.log(categoryName);
console.log(localStorage);

/*localStorage.setItem('items', JSON.stringify(itemsArray));*/

if (itemsArray) {
    itemsArray.forEach(function(item) {
    liMaker(item);
    } )
    } 

function liMaker(text) {
    ul.innerHTML += "<li>" + text + "</li>";
}

form.addEventListener('submit',
function(event) {
    event.preventDefault()

    infoText.style.display = "none";

    itemsArray.push(input.value);
    localStorage.setItem(categoryName, JSON.stringify(itemsArray));
   
    
    liMaker(input.value);
                          
    input.value = '';
})

button.addEventListener('click',
function(event) {
    event.preventDefault()
    infoText.style.display = "block";
    localStorage.clear();
    ul.innerHTML = '';

})

console.log(localStorage);

