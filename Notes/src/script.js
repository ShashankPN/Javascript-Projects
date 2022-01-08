const popup = document.querySelector('.pop-up');
const newNoteForm = document.querySelector('#new-note-form');
const editNoteForm = document.querySelector('#edit-note-contents')
const cancelNewbtn = document.querySelector("#cancel-new");
const cancelSavebtn = document.querySelector("#cancel-save");
const createbtn = document.querySelector("#create");
const savebtn = document.querySelector("#save-note");
const notes = document.querySelector('.notes-container');
const nameError = document.querySelector('#name-error');
let collection = JSON.parse(localStorage.getItem('notes')) || [];
let unique = 0;

function displayNotes() {
    for (let i = 0; i < collection.length; i++) {
        let currentNote = notes.querySelector(`#a${collection[i].id}`);
        if (currentNote == null) {
            notes.innerHTML += `
            <div class="note" id="a${collection[i].id}">
                <div class="note-header">
                    <span class="note-title">${collection[i].Name}</span>
                    <button onclick="deleteNote(this)">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </div>
                <div class="note-body" onclick="editNote(this)">
                    <div class="note-contents">
                    ${collection[i].value}
                    </div>
                </div>
            </div>`
            unique = Math.max(unique, collection[i].id + 1);

        } else {
            currentNote.querySelector('.note-contents').innerText = collection[i].value;
        }
    }
}
displayNotes();

function isValidName(newName) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].Name == newName) {
            nameError.innerText = 'Name already taken';
            return 0;
        }
    }
    return 1;
}

function newNote() {
    nameError.innerHTML = '&nbsp';
    popup.classList.remove('hidden');
    newNoteForm.classList.remove('hidden');

    cancelNewbtn.addEventListener('click', newNoteCancel);
    createbtn.addEventListener('click', newNoteCreate);
    document.getElementById('new-note-name').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            createbtn.click();
        }
    })
}

function newNoteCancel() {
    popup.classList.add('hidden');
    newNoteForm.classList.add('hidden');
    cancelNewbtn.removeEventListener('click', newNoteCancel);
    return;
}

function newNoteCreate() {
    let newName = document.getElementById('new-note-name').value;
    if (newName != "" && isValidName(newName)) {
        unique++;
        collection.push({ Name: newName, value: "", id: unique });
        notes.innerHTML += `
            <div class="note" id="a${unique}">
                <div class="note-header">
                    <span class="note-title">${newName}</span>
                    <button onclick="deleteNote(this)">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </div>
                <div class="note-body" onclick="editNote(this)">
                    <div class="note-contents">
                    </div>
                </div>
            </div>`
        createbtn.removeEventListener('click', newNoteCreate);
        cancelNewbtn.click();
    }
}

function deleteNote(e) {
    let currentNote = e.parentElement.parentElement;
    let currentId = currentNote.id;
    for (let i = 0; i < collection.length; i++) {
        if ('a' + collection[i].id == currentId) {
            collection.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("notes", JSON.stringify(collection));
    notes.removeChild(currentNote);
}

function getIdByName(name) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].Name == name) {
            return i;
        }
    }
}

function editNote(event) {
    popup.classList.remove('hidden');
    editNoteForm.classList.remove('hidden');

    let noteName = event.parentElement.querySelector('.note-title').innerText;
    let idx = getIdByName(noteName);
    console.log(collection[idx], idx);
    editNoteForm.querySelector('h2').innerText = noteName;
    editNoteForm.querySelector('textarea').value = collection[idx].value;

    cancelSavebtn.addEventListener('click', editNoteCancel);
    savebtn.addEventListener('click', editNoteSave);

}

function editNoteCancel() {
    popup.classList.add('hidden');
    editNoteForm.classList.add('hidden');
    cancelSavebtn.removeEventListener('click', editNoteCancel);
    displayNotes();
}

function editNoteSave() {
    let newVal = document.getElementById('note-data').value;
    let name = editNoteForm.querySelector('h2').innerText;
    let idx = getIdByName(name);
    console.log(newVal, idx);

    if (newVal != collection[idx].value) {
        collection[idx].value = newVal;
        localStorage.setItem("notes", JSON.stringify(collection));
        savebtn.removeEventListener('click', editNoteSave);
        cancelSavebtn.click();
    }
}