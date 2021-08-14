document.querySelector('button').onclick = myClick;

function myClick() {

    let a = document.querySelector('.i-1').value;
    if (a == 'Вячеслав') {
        document.querySelector('.out').innerHTML = ('Привет, Вячеслав');
    } else {
        document.querySelector('.out').innerHTML = ('Нет такого имени');
    }



}