document.querySelector('button').onclick = myClick;

function myClick() {

    const numbers = [39, 33, 40, 11, 45];
    const filteredNumbers = numbers.filter(n => n % 3 == 0);
    document.querySelector('.out').innerHTML = (filteredNumbers);

}