const input__box = document.getElementById('input-box')
const list__container = document.getElementById('list-container')
const res__script = document.getElementById('resScript')

function addTask() {
  if(input__box.value === '') {
    res__script.style.display = 'block'
    res__script.innerHTML = 'Escreva alguma coisa'
    setTimeout(function () {
      res__script.innerHTML = '';
      res__script.style.display = 'none';
    }, 5000);
  } else {
    let li = document.createElement('li')
    li.innerHTML = input__box.value
    list__container.appendChild(li)
    const span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  input__box.value = '';
  saveData()
}

list__container.addEventListener('click' , function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    saveData()

  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
    saveData()  
  }
}, false)

function saveData() {
  localStorage.setItem("data" , list__container.innerHTML)
}

function showTask() {
  list__container.innerHTML = localStorage.getItem('data')
}

showTask();
