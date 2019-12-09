const fs = require("fs");
const opn = require("opn");

(async function createChessTable() {
	fs.writeFileSync("./chesstable.html", await chesstable(), "utf8");
	opn("./chesstable.html", {wait: false});
}());

function chesstable () {
	let table = "<table style='border:1px solid black'>";

	let startWhite = "<tr><td style='border:1px solid black'></td><td style='border:1px solid black; background-color:#000000'>B</td><td style='border:1px solid black'></td><td style='border:1px solid black; background-color:#000000'>B</td><td style='border:1px solid black'></td><td style='border:1px solid black; background-color:#000000'>B</td><td style='border:1px solid black'></td><td style='border:1px solid black; background-color:#000000'>B</td></tr>";
	let startBlack = "<tr><td style='border:1px solid black; background-color:#000000'>B</td><td style='border:1px solid black'></td><td style='border:1px solid black; background-color:#000000'>B</td><td style='border:1px solid black'></td><td style='border:1px solid black; background-color:#000000'>B</td><td style='border:1px solid black'></td><td style='border:1px solid black; background-color:#000000'>B</td><td style='border:1px solid black'></td></tr>";

	for (var i = 1; i < 5; i++) {
		table += startWhite;
		table += startBlack;
	}
	table += "</table>";

	return table;
}