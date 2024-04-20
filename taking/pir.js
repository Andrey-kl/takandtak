let counter = 0;
 
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const chistingBtn = document.querySelector('#chisting');
const counterName = document.getElementById('counter-name')

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
    if (counter >= 10 & counter < 20) {
        counterName.innerHTML = 'Ого! Так-такинг завелся!';
    } else if (counter >= 20 & counter < 30) {
        counterName.innerHTML = 'Пирожки действуют';
    } else if (counter >= 30 & counter < 40){
        counterName.innerHTML = 'Продолжительный такинг';
    } else if (counter >= 40 & counter < 50){
        counterName.innerHTML = 'Качественный такинг';
    } else if (counter >= 50 & counter < 60){
        counterName.innerHTML = 'Король такинга';
    } else if (counter >= 1 & counter < 10){
        counterName.innerHTML = 'Время потак-такинга';
    } else if (counter >= 60 & counter < 80){
        counterName.innerHTML = 'Экстримальный такинг';
    } else if (counter >= 80 & counter < 100){
        counterName.innerHTML = 'Легендарный такинг';
    } else if (counter >= 100){
        counterName.innerHTML = 'Разрыв галактики';
    }
});
 
decrementBtn.addEventListener('click', () => {
    if (counter > 0)
        counter--;
        counterValue.innerHTML = counter;
        if (counter >= 10 & counter < 20) {
            counterName.innerHTML = 'Ого! Так-такинг завелся!';
        } else if (counter >= 20 & counter < 30) {
            counterName.innerHTML = 'Пирожки действуют';
        } else if (counter >= 30 & counter < 40){
            counterName.innerHTML = 'Экстримальный такинг';
        } else if (counter >= 1 & counter < 10){
            counterName.innerHTML = 'Поедание пирожков';
        }
});


chistingBtn.addEventListener('click', chisti);



function chisti() {
    counter = 0;
    counterValue.innerHTML = counter;
}