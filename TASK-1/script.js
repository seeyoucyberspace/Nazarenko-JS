document.querySelector('button').onclick = myClick;

function myClick() {

    let a = document.querySelector('.i-1').value;
    if (a < 7) return;
    document.querySelector('.out').innerHTML = ('Привет');


}