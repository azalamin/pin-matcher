// get pin
function getPin() {
    const randomPin = Math.round(Math.random() * 10000);
    const pin = randomPin + '';
    if (pin.length == 4) {
        return pin
    } else {
        return getPin();
    }
}

// generate random pin
function generatePin() {
    const pin = getPin()
    const generateInput = document.getElementById('generate-input');
    generateInput.value = pin;
}

const buttons = document.getElementsByClassName('btn');
for (const button of buttons) {
    button.addEventListener('click', function(e) {
        const calcInput = document.getElementById('calc-input');
        const inputValue = e.target.innerText;
        e.stopImmediatePropagation();
        const totalValue = calcInput.value + inputValue;
        calcInput.value = totalValue;
    })
};

function verifyPin() {
    const calcInput = document.getElementById('calc-input').value;
    const generateInput = document.getElementById('generate-input').value;
    const matched = document.getElementById('matched');
    const notMatched = document.getElementById('not-matched');
    const tryLeft = document.getElementById('try-left');
    if (calcInput == generateInput) {
        matched.style.display = 'block';
        notMatched.style.display = 'none';

    } else {
        notMatched.style.display = 'block';
        matched.style.display = 'none';
        tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
        if (tryLeft.innerText == 0) {
            document.getElementById('submit-btn').setAttribute('disabled', true)
        }
        document.getElementById('calc-input').value = '';
    }
}

// delete single number from input
function deleteLastNum() {
    const calcInput = document.getElementById('calc-input');
    calcInput.value = calcInput.value.slice(0, -1);
}

// Clear InputField
function clearInput() {
    document.getElementById('calc-input').value = "";
}