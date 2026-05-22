const terms = [
    ["term1", "uitleg"],
    ["term2", "uitleg"]
];

const elList = document.getElementById('term-list');
const counterE = document.getElementById('teller');
const elUitleg = document.getElementById('uitleg');
const elTerm = document.getElementById('term');

var term = terms[0];
var usedIndexes = [];
var clicks = 0;
var isExplanationVisible = false;

let currentIndex = 0;

const isDrawn = i => {
    var index = 0;
    var found = false;
    while (index < usedIndexes.length && !found) {
        if (usedIndexes[index] === i) {
            found = true;
        }
        index++;
    }
    return found;
};

const generateTerm = () => {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * terms.length);
    } while (newIndex === currentIndex && terms.length > 1);
    currentIndex = newIndex;
    clicks++;
    renderCard();
};

const showAnswer = () => {
    const answer = term[1];
    elUitleg.innerHTML = answer;
    isExplanationVisible = true
};

const emptyAll = () => {
    elTerm.textContent = "Term:";
    elUitleg.textContent = "";
};

const reset = () => {
    clicks = 0;
    usedIndexes = [];
    emptyAll();
    counterE.textContent = `(${clicks} / ${terms.length})`;
};

function renderList() {
    elList.innerHTML = '';
    terms.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-item'; //nog een class voor opmaak toekennen
        li.textContent = item[0];
        li.dataset.index = index;

        li.addEventListener('click', () => {
            currentIndex = index;
            isExplanationVisible = false;
            renderCard();
            updateActiveListState();
            showAnswer();
        });

        elList.appendChild(li);
    });
    updateActiveListState()
};

function renderCard() {
    term = terms[currentIndex];
    emptyAll();
    const vraag = term[0];
    elTerm.textContent = "Term: " + vraag;
    usedIndexes.push(currentIndex);
    if (clicks > terms.length) {
        reset();
        generateTerm();
    }
    counterE.textContent = `(${clicks} / ${terms.length})`;
    isExplanationVisible = false;

};

function updateActiveListState() {
    const items = elList.querySelectorAll('li');
    items.forEach((li) => {
        const idx = parseInt(li.dataset.index);
        if (idx === currentIndex) {
            li.classList.add('active');
            li.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            li.classList.remove('active');
        }
    });
};

//Initialiseren
counterE.textContent = `(${clicks} / ${terms.length})`;
renderList();
generateTerm();