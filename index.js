const h1Button = document.getElementById('h1');
const h2Button = document.getElementById('h2');
const pButton = document.getElementById('p');
const leftButton = document.getElementById('left');
const centerButton = document.getElementById('center');
const rightButton = document.getElementById('right');
const editor = document.querySelector('.editor-area');
const bButton = document.getElementById("b")

function applyStyle(action) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const parent = range.commonAncestorContainer.parentElement;


        if (action === 'h1') {
            parent.style.fontSize = '32px';
            parent.style.fontWeight = 'bold';
        } else if (action === 'h2') {
            parent.style.fontSize = '24px';
            parent.style.fontWeight = 'bold';
        } else if (action === 'p') {
            parent.style.fontSize = '16px';
            parent.style.fontWeight = 'normal';
        } else if (action === 'left') {
            parent.style.textAlign = 'left';
        } else if (action === 'center') {
            parent.style.textAlign = 'center';
        } else if (action === 'right') {
            parent.style.textAlign = 'right';
        }else if (action === "b"){
          parent.style.fontWeight = "bold"
        }
    }
}

bButton.addEventListener('click', () => applyStyle('b'));
h1Button.addEventListener('click', () => applyStyle('h1'));
h2Button.addEventListener('click', () => applyStyle('h2'));
pButton.addEventListener('click', () => applyStyle('p'));
leftButton.addEventListener('click', () => applyStyle('left'));
centerButton.addEventListener('click', () => applyStyle('center'));
rightButton.addEventListener('click', () => applyStyle('right'));
