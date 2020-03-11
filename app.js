// use your hs knowledge to calculte prime numbers

const num1 = prompt('please enter a number between 5 and 20: ')

const output = document.getElementById('output')


if (num1<5 || num1>20){ // this ensures that num1 will be between 5 and 20.
    var printResult = "the valid input is a number between 5 and 20, please refresh your page to start again." //if it is not in the boundary, display this msg
    output.innerHTML = printResult; //prints this into the <h2> from the index.html

}

var result = ' ';
for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 13; j++) {

        if(i == 0 && j > 0){
          result += ' ' + j + ' ';
        } 
        else if(j == 0 && i>0){
          result += ' ' + i + ' ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);

