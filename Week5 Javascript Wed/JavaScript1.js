      
function displayRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}


function upRight(pHeight, pColorOdd, pColorEven, pSymbol) {

    var rLine = "";

    for (i = 0; i < pHeight; i++) {

        rLine += "<p>";
        
        for (j = 0; j <= i; j++) {

            if (j % 2)

                //even 

                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";

            else 
                //odd

                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }

        rLine += "</p>"
       
    }

    document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorOdd, pColorEven, pSymbol) {

    var rLine = "";

    for (i = pHeight; i > 0; i--) {

        rLine += "<p>";

        for (j = 0; j < i; j++) {

            if (j % 2)

                //even 

                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";

            else
                //odd

                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }

        rLine += "</p>"

    }

    document.getElementById("downRight").innerHTML = rLine;
}

function upLeft(pHeight, pColorOdd, pColorEven, pSymbol) {

    var rLine = "";

    for (i = 0; i < pHeight; i++) {

        rLine += "<p>";

        for (j = 0; j <= i; j++) {

            if (j % 2)

                //even 

                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";

            else
                //odd

                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }

        rLine += "</p>"

    }

    document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorOdd, pColorEven, pSymbol) {

    var rLine = "";

    for (i = pHeight; i > 0; i--) {

        rLine += "<p>";

        for (j = 0; j < i; j++) {

            if (j % 2)

                //even 

                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";

            else
                //odd

                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }

        rLine += "</p>"

    }

    document.getElementById("downLeft").innerHTML = rLine;
}

/*
upLeft(5,"*","red","blue");
function upLeft(pHeight, pSymbol, pColorEven,pColorOdd ){
  var rLine = "";

    for (i = 1; i <= pHeight; i++) {

        rLine += "<p>";
       
        for (j = 0; j<pHeight-i; j++) {

                rLine += "-";

        }
  

        for (x = j; x < pHeight; x++) {

            rLine += "*";

        }

       
    }
 rLine += "</p>";
        console.log(rLine);

    //document.getElementById("upLeft").innerHTML = rLine;
}


*/