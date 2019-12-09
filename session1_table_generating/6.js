const fs = require("fs");

// automatikus tipus konverzio

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
		resultString += "<td width='1' height='1' style='background: rgb(0, " + angleToColorComponent(Math.sin(toRadians(i))) + ", " + angleToColorComponent(Math.cos(toRadians(j))) + ")'></td>\n";  // tabulálás

	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table>";

//fs.writeFileSync("./temp.html", "test", "utf8");
fs.writeFileSync("./temp.html", resultString, "utf8");