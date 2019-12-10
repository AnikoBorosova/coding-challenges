const fs = require("fs");

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

// -1 --> 0
// +1 --> 255
// sin(angle) +1 --> 0 -- 2
// (sin(angle) + 1 ) * 127.5  -->  0 -- 255

function angleToColorComponent(sinCosValue) {
	return (sinCosValue + 1) * 127.5;
}




let resultString = "<table cellpadding='0' cellspacing='0'>\n";

for (let i = 0; i < 360; i++) {
	resultString += "<tr>\n";

	for (let j = 0; j < 360; j++) {
		resultString += "<td width='1' height='1' style='background: rgb(" + angleToColorComponent(Math.tan(toRadians(i*j/10))) + ", " + angleToColorComponent(Math.sin(toRadians(i*j/10))) + ", " + angleToColorComponent(Math.cos(toRadians(i*j/10))) + ")'></td>\n";  // tabulálás

	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table>";

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
