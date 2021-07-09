const container = document.querySelector('.container');
const createButton = document.getElementById('new');
const ul = document.querySelector('ul');

/* Create new list container */
const createList = document.querySelector('.create-list');
const closeButton = document.querySelector('.close');
const addButton = document.getElementById('add');
const input = document.getElementById('new-list');
const error = document.getElementById('error');

let itemsArray = localStorage.getItem('categories')
    ?
    JSON.parse(localStorage.getItem('categories'))
    : []

itemsArray.forEach(function(name) {
    liMaker(name);
})

createButton.addEventListener('click',
function(event) {
    
    createList.style.display = "block";
})

closeButton.onclick = function() {
    createList.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === createList) {
        createList.style.display = "none";
    }
}

addButton.addEventListener('click',
function(event) {
    console.log(input.value.trim().length);

    if (input.value.trim().length > 0) {
        
        createList.style.display = "none";

        itemsArray.push(input.value);
        localStorage.setItem('categories',JSON.stringify(itemsArray));
        console.log(localStorage);
        console.log(itemsArray);

   

        liMaker(input.value);

        input.value = '';

    } else {
        console.log("oh no!");
        error.style.display = "block";
    }
})



function liMaker(text) {

    let listLength = "0";
    
    if (JSON.parse(localStorage.getItem(text))) {
        listLength = JSON.parse(localStorage.getItem(text)).length;
        
    };
 
    ul.innerHTML += `<a href='list.html?name=${text}'>
                        <li><p class='category-name'>${text}</p>
                                <p class='number'>number/${listLength}</p> 
                        </li>
                     </a>`;              
}


console.log(localStorage);
console.log(itemsArray);
console.log(itemsArray[5]);

console.log(JSON.parse(localStorage.getItem('categories')).length);

