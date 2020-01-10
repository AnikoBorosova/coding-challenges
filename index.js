const fs = require("fs");
const tree = require("./tree.json");

let resultString = "<body>\n";

//if (tree.body.children.type === "text") {
	resultString += `${tree.body.children[0].value}`;
//}

// for loop a childrenen
// ha vannak childrenjei (children.length !== 0), akkor rekurziv fv

//a fuggveny onmagat hivogatja
//de kell egy legelso hivas a body-ra

resultString = "</body>";






fs.writeFileSync("./temp.html", resultString, "utf8");