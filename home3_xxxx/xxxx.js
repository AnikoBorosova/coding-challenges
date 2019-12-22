const fs = require("fs");

let resultString = "<table cellpadding='1' cellspacing='1'>\n";
let diag = 18;

for (let i = 0; i < diag; i++) {
	resultString += "<tr>\n";

	for (let j = 0; j < diag; j++) {

		if ((i < diag / 2) && (j < diag / 2) && (i + j == diag / 2 - 1) || (i == j)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i < diag / 2) && (j >= diag / 2) && (i + diag / 2 == j) || (i + j == diag - 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i >= diag / 2) && (j < diag / 2) && (i - diag / 2 == j)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i >= diag / 2) && (j >= diag / 2) && (i + j == diag - 1 + diag / 2)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else {
			resultString += "<td width='20' height='20' style='background: rgb(255, 255, 255)'></td>\n";
		}
	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table></div>";


fs.writeFileSync("./temp.html", resultString, "utf8");