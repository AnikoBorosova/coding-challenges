const fs = require("fs");
const opn = require("opn");

(async function createChessTable() {
	fs.writeFileSync("./chesstable.html", await chesstable(), "utf8");
	opn("./chesstable.html", {wait: false});
}());

function chesstable () {
	let table = "<table style='border:1px solid black'>";
	let whiteField = "<td style='border:1px solid black'></td>";
	let blackField = "<td style='border:1px solid black; background-color:#000000'>B</td>";

	let startWhite = [];
	let startBlack = [];


	for (var k = 0; k < 4; k++) {
		startWhite.push(whiteField);
		startWhite.push(blackField);
	}

	for (var l = 0; l < 4; l++) {
		startBlack.push(blackField);
		startBlack.push(whiteField);
	}

	for (var j = 1; j < 5; j++) {
		table += "<tr>";

		for (var i = 0; i < startWhite.length; i++) {
			table += startWhite[i];
		}

		table += "</tr>";

		table += "<tr>";

		for (var i = 0; i < startBlack.length; i++) {
			table += startBlack[i];
		}

		table += "<tr>";
	}

	table += "</table>";

	return table;
}