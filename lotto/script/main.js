
function buildArrayWithRandomNumbers(){
}

function getRandomNumber(from, to){
    return parseInt(String(Math.random() * (to-from) + from));
}

function buildArrayWithRandomNumbers(){
    const randomNumbers =Array.from({length: 6});
    console.log(randomNumbers)
    
    for(let i=0; i<randomNumbers.length; i++){
    //const element = randomNumbers[i];
        randomNumbers[i] = getRandomNumber(1,49) 
    }
    randomNumbers.sort(function(a,b){
        if(a > b){
            return 1;
        }else if(a < b){
            return -1;
        }else{
            return 0;
        }
    })
    return randomNumbers;
}
function template(content){
    return '<div class="circle">' + content + '</div>';
 }   

 function render(numbers){
    const page = document.querySelector("#page");
    numbers.forEach(function (number){
        page.innerHTML +=  template(number);
    })
 }

 
 
function main() {
    const numbers = buildArrayWithRandomNumbers();
    render(numbers);
}

window.addEventListener('DOMContentLoaded', main);