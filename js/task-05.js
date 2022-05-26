const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', function (event) {
    console.log(event.target);
      output.textContent = event.target.value;
    if (event.target.value ==='') {
        output.textContent = 'Anonymous'
    }
  
})