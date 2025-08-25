const byId = document.getElementById('para');
byId.textContent = 'I just changed the content using DOM';

const content = document.querySelector('#content');
console.log(content.innerText);
console.log(content.textContent);

const byClass = document.getElementsByClassName('highlight');
for (const classes of byClass) {
    console.log(classes.innerText);
}

const byTag = document.getElementsByTagName('p');
for (const tag of byTag) {
    console.log(tag.innerText);
}

const byName = document.getElementsByName('language');
for (const name of byName) {
    console.log(name.value);
}

const byQuery = document.querySelector('.highlight');
console.log(byQuery.innerText);

const byQueryAll = document.querySelectorAll('h2');
for (const queries of byQueryAll) {
    console.log(queries.innerText);
}