const form = document.querySelector('form');

const ul = document.querySelector('ul');

const button = document.querySelector('button');

const input = document.getElementById('item');

const infoText = document.getElementById('info-text')

let itemsArray = localStorage.getItem('items')
    ?
    JSON.parse(localStorage.getItem('items'))
    : []

/*localStorage.setItem('items', JSON.stringify(itemsArray));*/

console.log(localStorage);

const data = JSON.parse(localStorage.getItem('items'));
console.log(data);

if (data) {
    data.forEach(function(item) {
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
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(localStorage);
    console.log(data);
    
    liMaker(input.value);
                          
    input.value = '';
})

button.addEventListener('click',
function(event) {
    event.preventDefault()
    infoText.style.display = "block";
    localStorage.clear();
    ul.innerHTML = '';
   console.log(ul.innerHTML);

})


