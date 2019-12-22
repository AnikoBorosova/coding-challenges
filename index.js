const fs = require("fs");

let resultString = "<table cellpadding='1' cellspacing='1'>\n";
let diag = 18;

for (let i = 0; i < diag; i++) {
	resultString += "<tr>\n";

	for (let j = 0; j < diag; j++) {

		
	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table></div>";


fs.writeFileSync("./temp.html", resultString, "utf8");