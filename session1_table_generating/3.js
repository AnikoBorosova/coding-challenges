const fs = require("fs");

// automatikus tipus konverzio

let resultString = "<table>\n";

for (let i = 0; i < 10; i++) {
	resultString += "<tr>\n";

	for (let j = 0; j < 10; j++) {
		resultString += "<td>" + i * j + "</td>";  // tabulálás

	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table>";

//fs.writeFileSync("./temp.html", "test", "utf8");
fs.writeFileSync("./temp.html", resultString, "utf8");