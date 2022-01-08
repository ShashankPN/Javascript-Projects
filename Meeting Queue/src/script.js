let data = [{
        "Name": "Shubam",
        "Topic": "Artificial Intelligence",
        "Photo": "1.jpg"

    },
    {
        "Name": "Priya",
        "Topic": "MBA",
        "Photo": "2.png"
    },
    {
        "Name": "Suraj",
        "Topic": "Electronics",
        "Photo": "default.webp"
    }
];

let currentIndex = -1;
let userName = document.getElementById('user-name');
let userTopic = document.getElementById('user-topic');
let userImage = document.getElementById('user-img');

let memberName = document.getElementById('member-name');
let memberTopic = document.getElementById('member-topic');
let memberImage = document.getElementById('member-img');

let formMessage = document.getElementById('form-message');
let formWrapper = document.querySelector('.form-wrapper');

function displayNext() {
    currentIndex = (currentIndex + 1) % data.length;
    displayUser(currentIndex);
};

function displayPrev() {
    currentIndex = (currentIndex - 1) % data.length;
    if (currentIndex < 0)
        currentIndex += data.length;
    displayUser(currentIndex);
};

function displayUser(id) {
    userName.innerText = data[id].Name;
    userTopic.innerText = `Topic: ${data[id].Topic}`;
    userImage.src = `./img/${data[id].Photo}`;
}

function closeForm() {
    formWrapper.style.visibility = 'hidden';
}

function editUser() {
    formMessage.innerText = "";
    document.getElementById('form-heading').innerText = `Edit Details of ${data[currentIndex].Name}`;
    memberName.value = data[currentIndex].Name;
    memberTopic.value = data[currentIndex].Topic;
    formWrapper.style.visibility = 'visible';
    document.getElementById('submit').addEventListener('click', () => {

        let formName = memberName.value.trim();
        let formTopic = memberTopic.value.trim();
        let formPhoto = memberImage.value.trim();

        if (formName != "")
            data[currentIndex].Name = formName;
        if (formPhoto != "")
            data[currentIndex].Photo = formPhoto;
        if (formTopic != "")
            data[currentIndex].Topic = formTopic;
        displayUser(currentIndex);
        formMessage.innerText = `*Succesfully Edited ${formName} details in the queue`;
    })
}

function validName(name) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].Name == name)
            return false;
    }
    return true;
}

function addUser() {
    formMessage.innerText = "";
    document.getElementById('form-heading').innerText = `Details of New User`;
    formWrapper.style.visibility = 'visible';
    document.getElementById('submit').addEventListener('click', () => {

        let formName = memberName.value.trim();
        let formTopic = memberTopic.value.trim();
        let formPhoto = memberImage.value.trim();

        if (!validName(formName)) {
            formMessage.innerText = `*${formName} already present in the queue`;
            return;
        }
        if (formPhoto == "")
            memberPhoto = 'default.webp';

        data.push({ Name: formName, Topic: formTopic, Photo: formPhoto });
        formMessage.innerText = `*Succesfully added ${formName} to the queue`;
    })
}

displayNext();