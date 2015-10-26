//var myBase = 5;
var result='';
var divResult = document.getElementById("result");

createMultTable(10, 15);

//create function

function createMultTable(myBase, max) {

    var l_base = myBase;
    result = "<h1> Using innerHTML </h1>";
    for (i = 0; i <= max; i++)

    {  result += "<p>" + i + "<span class='symbols'> * </span>" + l_base + "<span class='symboles'> = </span>" +i * l_base + "</p>";   }

}


divResult.innerHTML += result;