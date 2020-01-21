// get the elements
const time = document.getElementById('time');
const inputList = document.getElementById('inputList');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');
const rstBtn = document.getElementById('rstBtn');

// date
const options = {
  weekday : "long",
  day     :"numeric",
  month   :"long",
  year    :"numeric"};
const today = new Date();
time.textContent = today.toLocaleDateString("id-ID", options);

// focus on input
inputList.focus();

// enter as a click to addBtn
inputList.addEventListener('keyup', function(event) {
  if (event.code === 'Enter') {
    addBtn.click();
  }
});

// click man click
addBtn.addEventListener('click', addList);
rstBtn.addEventListener('click', rstList);

// adding list
function addList() {
  const list = document.createElement('li');
  const alist = document.createElement('a');
  alist.setAttribute('href', '');

  const inputValue = inputList.value;

  if (inputValue === '') {
    alert('input tidak boleh kosong!');
  } else {
    alist.textContent = inputValue;
    toDoList.appendChild(list);
    list.appendChild(alist);
  }

  inputList.value = '';
}

// strikethrough list when clicked
const listed = document.querySelector('ul');
listed.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    event.target.classList.toggle('strikeList');
  }
});

// reset list
function rstList() {
  const sure = confirm('are you sure?');
  if (sure === true) {
    const resetList = document.querySelectorAll('#toDoList a');
    for (let i = 0 ; i < resetList.length ; i++) {
      resetList[i].textContent = '';
    }
  }
}