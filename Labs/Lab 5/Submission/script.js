const buttonElement = document.querySelector('#btn');
const title = document.querySelector('.title');
const polite = document.querySelector('#bossy');
const list1 = document.querySelector('#one');
const list2 = document.querySelector('#two');
const list4 = document.querySelector('#four');
const body = document.querySelector('body');
const classChange = document.querySelector('#five');

buttonElement.addEventListener('click', function() {
    title.textContent = 'This H1 was changed with JavaScript!';
    polite.textContent = 'Could you pretty please do these things:';
    list1.style.color = 'blue';
    list2.style.background = '#FAEBCC';
    body.style.background = 'gray';
    list4.style.textTransform = 'uppercase';
    classChange.classList.add('title');
});