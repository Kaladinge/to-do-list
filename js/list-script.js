const form = document.querySelector('form');

const ul = document.querySelector('ul');

const button = document.querySelector('button');

const input = document.getElementById('item');

let itemsArray = [];

localStorage.setItem('items', JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem('items'));


form.addEventListener('submit',
function(event) {
    event.preventDefault()

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    
    ul.innerHTML += "<li>" + input.value + "</li>";
                          
    input.value = '';
})

