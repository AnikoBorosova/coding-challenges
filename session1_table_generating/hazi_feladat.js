const fs = require("fs");

function toRadians(angle) {
	return angle * (Math.PI / 180);
}

// -1 --> 0
// +1 --> 255
// sin(angle) +1 --> 0 -- 2
// (sin(angle) + 1 ) * 127.5  -->  0 -- 255

function angleToColorComponent(sinCosValue) {
	return (sinCosValue - 1) * (-100);
}




let resultString = "<div width='400' height='220' padding='10' style='background: rgb(153, 153, 153)'>\n<table cellpadding='0' cellspacing='0'>\n";

for (let i = 0; i < 200; i++) {
	resultString += "<tr>\n";

	for (let j = 0; j < 359; j++) {
		//resultString += "<td width='1' height='1' style='background: rgb(" + angleToColorComponent(Math.sin(toRadians(i*j*0))) + ", " + angleToColorComponent(Math.sin(toRadians(i*j*0))) + ", " + angleToColorComponent(Math.cos(toRadians(j*i*0))) + ")'></td>\n";  // tabulálás
		resultString += "<td width='1' height='1' style='background: rgb(255, 255, 255)'></td>\n";  // tabulálás

	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table></div>";

//fs.writeFileSync("./temp.html", "test", "utf8");
fs.writeFileSync("./temp.html", resultString, "utf8");




// automatikus tipus konverzio

// chesstable   i --> y tengely lefelé
				//j --> x tengely balrol jobbra

// átlót kiszinezni --> ha i = j
// átlót visszafelé --> ha i + j = 3
// szinusz görbe --> 
//  |
//  ˇ
//  (sincosval -1) * (-100)

//  j --> 0-- 359
//  i --> 0 - 100 -- 200

//  Házi feladat: sinus görbe és rombusz


// rgb(255, 255, 255)  fehér
// rgb(0, 0, 0)        fekete