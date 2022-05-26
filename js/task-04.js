let counterValue = 0;
const btnPlus = document.querySelector("button[data-action='increment']");
const btnMinus = document.querySelector("button[data-action='decrement']");
const value = document.getElementById('value')

function increment() {
    counterValue+=1;
    value.textContent = counterValue;

}
function decrement() {
  
    counterValue-=1;
    value.textContent = counterValue;
}
btnMinus.addEventListener('click', decrement);
btnPlus.addEventListener('click', increment)