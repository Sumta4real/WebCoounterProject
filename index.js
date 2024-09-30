// declare variables neeeded

const countValue = document.getElementById('count-value');
const increaseBtn = document.getElementById('increasebtn');
const resetBtn = document.getElementById('resetbtn');
const decreaseBtn = document.getElementById('decreasebtn');

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countValue.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countValue.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countValue.textContent = count;
}
