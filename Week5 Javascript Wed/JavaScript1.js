      
function displayRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    }

function upLeft(pHeight, pColorOdd, pColorEven, pSymbol) {

    var rLine = "";

    for (i = 0; i < pHeight; i++) {

        rLine += "<p>";
       
        for (x = 0; x < pHeight-i; x++) {

            rLine += "&nbsp";

        }
  

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



function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {

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

        rLine += "</p>";
        

    }

    document.getElementById("upRight").innerHTML = rLine;
}



function downLeft(pHeight, pColorOdd, pColorEven, pSymbol) {

    var rLine = "";

    for (i = pHeight; i > 0; i--) {

        rLine += "<p>";


        for (x = 0; x < (pHeight - i) ; x++) {

            rLine += "&nbsp";

        }

        for (j = 0; j < i; j++) {


            if (j % 2)

                //even 

                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

            else
                //odd

                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";

        }

        rLine += "</p>"

    }

    document.getElementById("downLeft").innerHTML = rLine;
}


function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {

    var rLine = "";

    for (i = pHeight; i > 0; i--) {

        rLine += "<p>";

        for (j = 0; j < i; j++) {



            if (j % 2)
                //even
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";

        }

        rLine += "</p>";


    }

    document.getElementById("downRight").innerHTML = rLine;
}