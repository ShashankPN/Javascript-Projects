let todos = document.getElementById('todoList');
let container = JSON.parse(localStorage.getItem('todos')) || [];
let newItem = document.getElementById('newItem');

function delayTimer(val) {
    return setTimeout(() => {}, val);
}

const timer = ms => new Promise(res => setTimeout(res, ms));

async function toggleList() {
    for (let i = 0; i < container.length; i++) {
        document.getElementById(container[i]).classList.toggle('visible');
        await timer(100);
    }

}

function sortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop])
            return 1;
        else if (a[prop] < b[prop])
            return -1;
        return 0;
    }
}

function deleteTask(element) {
    element = element.parentElement;
    todos.removeChild(element);
    element = element.id;
    for (let i = 0; i < container.length; i++) {
        if (container[i] == element) {
            container.splice(i, 1);
            localStorage.setItem('todos', JSON.stringify(container));
            break;
        }
    }
}

function moveUp(element) {
    element = element.parentElement.id;
    for (let i = 1; i < container.length; i++) {
        if (container[i] == element) {
            let temp = container[i];
            container[i] = container[i - 1];
            container[i - 1] = temp;
            break;
        }
    }
    displayOrder();
}

function moveDown(element) {
    element = element.parentElement.id;
    for (let i = 0; i < container.length - 1; i++) {
        if (container[i] == element) {
            let temp = container[i];
            container[i] = container[i + 1];
            container[i + 1] = temp;
            break;
        }
    }
    displayOrder();
}

function displayOrder() {
    for (let i = 0; i < container.length; i++) {
        todoElement = document.getElementById(`${container[i]}`);
        if (todoElement == null) {
            createElement(container[i]);
            todoElement = document.getElementById(`${container[i]}`);
        }
        todoElement.style.order = i + 1;
    }
}

newItem.addEventListener('keyup', ({ key }) => {
    if (key === "Enter") {
        if (newItem.value == '') {
            return;
        } else {
            container.push(newItem.value);
            localStorage.setItem('todos', JSON.stringify(container));
            createElement(newItem.value);
            newItem.value = '';
        }
    }
})

function createElement(element) {
    todos.innerHTML += `
    <li class="incomplete item visible " id="${element}">
        <button class="delete btn" onclick="deleteTask(this)">
            <img src="/todo-app/img/delete.png" alt="">
        </button> ${element}
        <button class="down btn" onclick="moveDown(this)">
            <img src="/todo-app/img/arrow-down.png" alt="">
        </button>
        <button class="up btn" onclick="moveUp(this)">
            <img src="/todo-app/img/arrow-up.png" alt="">
        </button>
    </li>`;
}


function showList() {
    todos.classList.add('active');
}

function hideList() {
    todos.classList.remove('active');
}
displayOrder();