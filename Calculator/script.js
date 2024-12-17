
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let history = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            display.value += button.textContent;
        } else if (button.classList.contains('operator')) {
            display.value += `${button.textContent}` ;
        } else if (button.classList.contains('clear')) {
            display.value = '';
            history = '';
        } else if (button.classList.contains('evaluate')) {
            try {
                const result = eval(display.value);
                display.value = result;
                history += display.value + '\n';
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
});
