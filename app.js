// use your hs knowledge to calculte prime numbers

const num1 = prompt('please enter a number between 5 and 20: ')

const output = document.getElementById('output')

var val ="true";

if (num1<5 || num1>20 || isNaN(num1)==true){ // this ensures that num1 will be between 5 and 20.
    var printResult = "the valid input is a number between 5 and 20, please refresh your page to start again." //if it is not in the boundary, display this msg
    output.innerHTML = printResult; //prints this into the <h2> from the index.html
    val = "false";

}

var table = `<table><tbody>`;
var tName = document.getElementById("tableName").innerHTML = `Times Table ${num1} x ${num1}`;
for(var i = 0 ; i <= num1 ;i++){
    table += "<tr>"
    var r=1;
    table += `<td id="head";">${r}</td>`
    
    for(var j = 0 ; j <= num1 ;j++){
        var res=i*j;

        if(i == 1){
            table += `<td id="row1" >${res}</td>`
        }
        else if(i == 0 && j == 0){
            table += `<td></td>`
        }
        else if(i == 0){
            table += `<td id="rowHead" >${r}</td>`
        }
        else if(j == 0){
            table += `<td id="colHead" >${r}</td>`
        }
        else if(j == 1){
            table += `<td id="diagRow" >${res}</td>`
        }
        else if(i == j){
            table += `<td id="col1"" >${res}</td>`
        }

        else{
            table += `<td>${res}</td>`
        }
        r=r+1;
    }

table += "</tr>"

}

table += "</tbody></table>";
document.write(table);


