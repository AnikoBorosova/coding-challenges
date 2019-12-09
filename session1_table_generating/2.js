const fs = require("fs");

// automatikus tipus konverzio

let resultString = "";

for (let i = 0; i < 10; i++) {
	resultString += i + " ";

	for (let j = 0; j < 10; j++) {
		resultString += i * j + "\t";  // tabulálás

	}

	resultString += "\n";  // sortörés
}

//fs.writeFileSync("./temp.html", "test", "utf8");
fs.writeFileSync("./temp.html", resultString, "utf8");