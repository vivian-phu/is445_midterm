// use your hs knowledge to calculte prime numbers

const num1 = prompt('please enter a number between 5 and 20: ')

const output = document.getElementById('output')


if (num1<5 || num1>20 || isNaN(num1)==true){ // this ensures that num1 will be between 5 and 20.
    var printResult = "the valid input is a number between 5 and 20, please refresh your page to start again." //if it is not in the boundary, display this msg
    output.innerHTML = printResult; //prints this into the <h2> from the index.html

}
var table = `<table><tbody>`;
var tName = document.getElementById("tableName").innerHTML = `Times Table ${num1} x ${num1}`;
for(var i = 1 ; i <= num1 ;i++){
    table += "<tr>"
    for(var j = 1 ; j <= num1 ;j++){
        var res=i*j;
        if(i == 1){
            table += `<td style="background-color: yellow; font-weight:bold;">${res}</td>`
        }
        else if(j == 1){
            table += `<td style="background-color: yellow; font-weight:bold;" >${res}</td>`
        }
        else if(i == j){
            table += `<td style="background-color: yellow; font-weight:bold;" >${res}</td>`
        }

        else{
            table += `<td>${res}</td>`
        }
    }

table += "</tr>"

}

table += "</tbody></table>";

document.write(table);


