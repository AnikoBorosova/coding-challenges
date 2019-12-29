const fs = require("fs");

let resultString = "<table cellpadding='1' cellspacing='1'>\n";
let side = 20;

for (let i = 1; i < side + 1; i++) {
	resultString += "<tr>\n";

	for (let j = 1; j < side + 1; j++) {

		///////
		if ((i <= side / 4) && (j <= side / 4) && (i == Math.round((side / 4) / 2)) || (i <= side / 4) && (j <= side / 4) && (j == Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i <= side / 4) && ((side / 4 < j) && (j <= side / 2)) && (i + side / 4 == j) || (i + j == side / 2 + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((side / 4 < i <= side / 2) && (side / 4 < j <= side / 2) && (i == j + side / 4))   {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if (((side / 4 < i) && (i <= side / 2)) && ((side / 4 < j) && (j <= side / 2)) && (i == side / 4 + Math.round((side / 4) / 2)) || ((side / 4 < i) && (i <= side / 2)) && ((side / 4 < j) && (j <= side / 2)) && (j == side / 4 + Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";
		////////
		} else if ((i <= side / 4) && (side / 2 < j) && (j <= side - side / 4) && (i == Math.round((side / 4) / 2)) || (i <= side / 4) && (side / 2 < j) && (j <= side - side / 4) && (j == side / 2 + Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((i <= side / 4) && (side - side / 4 < j) && (j <= side) && (i + side - side / 4 == j) || (i + j == side + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if (((side / 4 < i) && (i <= side / 2)) && (side / 2 < j) && (j <= side - side / 4) && (i + side / 4 == j) || (i + j == side + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";
		
		} else if (((side / 4 < i) && (i <= side / 2)) && (side - side / 4 < j) && (j <= side) && (i == side / 4 + Math.round((side / 4) / 2)) || ((side / 4 < i) && ( i <= side / 2)) && (side - side / 4 < j) && (j <= side) && (j == side - side / 4 + Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";
		///////
		} else if ((side / 2 < i) && (i <= side - side / 4) && (j <= side / 4) && (i == side / 2 + Math.round((side / 4) / 2)) || (side / 2 < i) && (i <= side - side / 4) && (j <= side / 4) && (j == Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((side / 2 < i) && (i <= side - side / 4) && (side / 4 < j) && (j <= side / 2) && (i == j + side / 4) || (i + j == side + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((side - side / 4 < i) && (i <= side) && (j <= side / 4) && (i == side - side / 4 + j) || (i + j == side + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((side - side / 4 < i) && (i <= side) && (side / 4 < j) && (j <= side / 2) && (i == side - side / 4 + Math.round((side / 4) / 2)) || (side - side / 4 < i) && (i <= side) && (side / 4 < j) && (j <= side / 2) && (j == side / 4 + Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";
		//////
		} else if ((side / 2 < i) && (i <= side - side / 4) && (side / 2 < j) && (j <= side - side / 4) && (i == side / 2 + Math.round((side / 4) / 2)) || (side / 2 < i) && (i <= side - side / 4) && (side / 2 < j) && (j <= side - side / 4) && (j == side / 2 + Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else if ((side / 2 < i) && (i <= side - side / 4) && (side - side / 4 < j) && (i <= side) && (i == j - side / 4) || (i + j == side + side / 2 + 1)) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";
		////
		//15. mező magától kialakult  -- fentebb valahol többet engedtem a feltételek által, mint kellett volna?
		} else if ((side - side / 4 < i) && (i <= side) && (side - side / 4 < j) && (j <= side) && (i == side - side / 4 + Math.round((side / 4) / 2)) || (side - side / 4 < i) && (i <= side) && (side - side / 4 < j) && (j <= side) && (j == side - side / 4 + Math.round((side / 4) / 2))) {

			resultString += "<td width='20' height='20' style='background: rgb(0, 0, 0)'></td>\n";

		} else {   

			resultString += "<td width='20' height='20' style='background: rgb(255, 255, 255)'></td>\n";

		}
	}

	resultString += "</tr>\n";  // sortörés
}

resultString += "</table></div>";


fs.writeFileSync("./temp.html", resultString, "utf8");