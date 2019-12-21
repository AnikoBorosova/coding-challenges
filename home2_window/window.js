const fs = require("fs");

let resultString = "<table cellpadding='1' cellspacing='1'>\n";
let diag = 14;

for (let i = 1; i <= diag; i++) {
	resultString += "<tr>\n";

	for (let j = 1; j <= diag; j++) {

		if ((i == diag / diag) || (j == diag / diag)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i == diag / 2) || (j == diag / 2)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i == diag / 2 + 1) || (j == diag / 2 + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i == diag) || (j == diag)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else {
			resultString += "<td width='20' height='20' style='background: rgb(255, 255, 255)'></td>\n";
		}
	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table></div>";


fs.writeFileSync("./temp.html", resultString, "utf8");