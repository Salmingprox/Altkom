
var liczba = 0;
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const input = document.querySelector("input[type=text]")

function displayValue(liczba) {
    if (input != null) {
        input.value = String(liczba);
    }
}

minus?.addEventListener('click', function(){
    liczba = liczba -1;
    displayValue(liczba);
})

plus?.addEventListener('click', function (){
    liczba = liczba + 1;
    displayValue(liczba);
})
displayValue(value);

