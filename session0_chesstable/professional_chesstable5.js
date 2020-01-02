const fs = require("fs");

let resultString = "<table cellpadding='1' cellspacing='1' border='1px solid black'>\n";
let side = 8;

for (let i = 1; i <= side; i++) {
	resultString += "<tr>\n";

	for (let j = 1; j <= side; j++) {

		if ((i % 2 == 0) && (j % 2 != 0)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i % 2 != 0) && (j % 2 == 0)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else {

			resultString += "<td width='20' height='20' style='background: rgb(255, 255, 255)'></td>\n";
		}
	}

	resultString += "</tr>\n";
}

resultString += "</table></div>";


fs.writeFileSync("./chesstable.html", resultString, "utf8");