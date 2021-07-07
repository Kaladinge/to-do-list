const container = document.querySelector('.container');
const createButton = document.getElementById('new');
const ul = document.querySelector('ul');

/* Create new list container */
const createList = document.querySelector('.create-list');
const closeButton = document.querySelector('.close');
const addButton = document.getElementById('add');
const input = document.getElementById('new-list');
const error = document.getElementById('error');

createButton.addEventListener('click',
function(event) {
    console.log("hi");
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
        console.log("hello");
        createList.style.display = "none";

        liMaker(input.value);

        input.value = '';

    } else {
        console.log("oh no!");
        error.style.display = "block";
    }
})

function liMaker(text) {
    ul.innerHTML += "<a href=list.html>" + "<li>" + text + "</li>" + "</a>";
}

console.log(localStorage);

