const h1Button = document.getElementById('h1');
const h2Button = document.getElementById('h2');
const pButton = document.getElementById('p');
const leftButton = document.getElementById('left');
const centerButton = document.getElementById('center');
const rightButton = document.getElementById('right');
const editor = document.querySelector('.editor-area');
const bButton = document.getElementById("b")
const fontUpButton = document.getElementById("font-size+")
const fontLowButton = document.getElementById("font-size-")
const textUnderline = document.getElementById("underline")
const cursor = document.getElementById("cursor")
const roboto = document.getElementById("Roboto")
const robotoSlab = document.getElementById("Slab")
const smooch = document.getElementById("Smooch")
const colorPicker = document.getElementById("colorPicker");
const textElement = document.getElementById("textElement");
const fontSelector = document.getElementById("fontSelector");
const letterSpacing = document.getElementById("letter-spacing")
const letterSpacingInput = document.getElementById('letter-spacing');
const letterSpacingValue = document.getElementById('letter-spacing-value');
const lineHeight = document.getElementById("line-height")
const lineHeightValue = document.getElementById("line-height-value")
const transformSelect = document.getElementById("transformSelect")



letterSpacingInput.addEventListener('input', () => {
  const spacing = `${letterSpacingInput.value}px`;
  editor.style.letterSpacing = spacing; 
  letterSpacingValue.textContent = spacing;
});
lineHeight.addEventListener('input', () => {
    const lineHeights = `${lineHeight.value}px`;
    editor.style.lineHeight = lineHeights; 
    lineHeightValue.textContent = lineHeights;
  });



function applyStyle(action) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const parElement = range.commonAncestorContainer.parentElement;
        

        if (action === 'h1') {
            parElement.style.fontSize = '32px';
            parElement.style.fontWeight = 'bold';
        } else if (action === 'h2') {
            parElement.style.fontSize = '24px';
            parElement.style.fontWeight = 'bold';
        } else if (action === 'p') {
            parElement.style.fontSize = '16px';
            parElement.style.fontWeight = 'normal';
        } else if (action === 'left') {
            parElement.style.textAlign = 'left';
        } else if (action === 'center') {
            parElement.style.textAlign = 'center';
        } else if (action === 'right') {
            parElement.style.textAlign = 'right';
        }else if (action === "b"){
            parElement.style.fontWeight = "bold"
            
        }else if (action === "font-") {
            const currentFontSize = parseInt(window.getComputedStyle(parElement).fontSize, 10);
            if (currentFontSize > 10) {
                parElement.style.fontSize = (currentFontSize - 1) + "px";
            }
        } else if (action === "font+") {
            const currentFontSize = parseInt(window.getComputedStyle(parElement).fontSize, 10);
            parElement.style.fontSize = (currentFontSize + 1) + "px";
        }else if (action === "underline") {
            parElement.style.textDecoration = "underline"
        }else if (action === "cursor") {
            parElement.style.cursor  = "pointer"
        }
        
          
    }
}
colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value; 
    textElement.style.color = selectedColor; 
});

fontSelector.addEventListener("change", () => {
    const selectedFont = fontSelector.value; 
    textElement.style.fontFamily = selectedFont; 
});
transformSelect.addEventListener("change", () => {
    const selectedTransform = transformSelect.value; 
    textElement.style.textTransform = selectedTransform; 
});

cursor.addEventListener('click', () => applyStyle('cursor'));
textUnderline.addEventListener('click', () => applyStyle('underline'));
fontUpButton.addEventListener('click', () => applyStyle('font+'));
fontLowButton.addEventListener('click', () => applyStyle('font-'));
bButton.addEventListener('click', () => applyStyle('b'));
h1Button.addEventListener('click', () => applyStyle('h1'));
h2Button.addEventListener('click', () => applyStyle('h2'));
pButton.addEventListener('click', () => applyStyle('p'));
leftButton.addEventListener('click', () => applyStyle('left'));
centerButton.addEventListener('click', () => applyStyle('center'));
rightButton.addEventListener('click', () => applyStyle('right'));
