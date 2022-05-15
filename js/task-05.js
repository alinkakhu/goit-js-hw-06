const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', function (event) {
    console.log(event.target);
    if (!input.textContent) {
        output.textContent = 'Anonymous'
    }
    output.textContent = event.target.value;
})