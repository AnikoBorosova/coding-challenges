const fs = require("fs");

let resultString = "<table cellpadding='1' cellspacing='1'>\n";
let side = 10;

for (let i = 1; i < side + 1; i++) {
	resultString += "<tr>\n";

	for (let j = 1; j < side + 1; j++) {

		if ((i <= side / 2) && (j <= side / 2) && (i == Math.round((side / 2) / 2)) || (i <= side / 2) && (j <= side / 2) && (j == Math.round((side / 2) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i <= side / 2) && (j > side / 2) && (i + side / 2 == j) || (i + j == side + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i > side / 2) && (j <= side / 2) && (i == j + side / 2)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i > side / 2) && (j > side / 2) && (i == side /2  + Math.round((side / 2) / 2)) || (i > side / 2) && (j > side / 2) && (j == side /2  + Math.round((side / 2) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else {   

			resultString += "<td width='20' height='20' style='background: rgb(255, 255, 255)'></td>\n";

		}
	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table></div>";


fs.writeFileSync("./temp.html", resultString, "utf8");