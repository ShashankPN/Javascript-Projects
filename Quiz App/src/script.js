let qBank = [{
        Q: 'Which of the following is not an organ in the human body?',
        a: 'Pancreas',
        b: 'Ulna',
        c: 'GallBladder',
        d: 'Eye',
        ans: 'b'
    },
    {
        Q: 'What is the main ingredient of mince pie?',
        a: 'Cherries',
        b: 'Dried Fruit',
        c: 'Rhubarb',
        d: 'Pork',
        ans: 'b'
    },
    {
        Q: 'A squid has ______ an octopus.',
        a: 'Less arms than',
        b: 'The same amount of arms as',
        c: 'More Arms than',
        d: 'None',
        ans: 'c'
    },
    {
        Q: 'Which of the following franchises did not have music composed by John Williams?',
        a: 'Batman',
        b: 'Jurassic Park',
        c: 'Harry Potter',
        d: 'Star Wars',
        ans: 'a'
    },
    {
        Q: 'In what year was the Berlin Wall torn down?',
        a: '1981',
        b: '1986',
        c: '1989',
        d: '1991',
        ans: 'c'
    },
    {
        Q: 'In the Song “Tik Tok,” Kesha kicks dudes to the curb unless they look like which musician?',
        a: 'John Mayer',
        b: 'James Tayloe',
        c: 'Steven Tyler',
        d: 'Mick Jagger',
        ans: 'd'
    }
]
let question = document.getElementById('question');
let a = document.getElementById('value1');
let b = document.getElementById('value2');
let c = document.getElementById('value3');
let d = document.getElementById('value4');

let options = document.getElementsByName('value');

let current = -1;
let score = 0;

function validateAns() {
    if (current == -1)
        return;
    options.forEach((btn) => {
        if (btn.checked) {
            btn.checked = false;
            if (qBank[current].ans == btn.id)
                score++;
        }
    })
}

function displayScore() {
    document.getElementsByTagName('ul')[0].style.display = 'none';
    question.innerText = `You answered ${score}/${qBank.length} questions correctly!`;
    next.innerText = 'Restart';

    next.addEventListener('click', () => {
        next.innerText = 'Next';
        document.getElementsByTagName('ul')[0].style.display = 'block';
        current = -1;
        nextQuestion();
    });
}

function nextQuestion() {
    validateAns();
    current++;
    if (current == qBank.length)
        displayScore();
    else {
        question.innerText = qBank[current].Q;
        a.innerText = qBank[current].a;
        b.innerText = qBank[current].b;
        c.innerText = qBank[current].c;
        d.innerText = qBank[current].d;
    }
}
nextQuestion();