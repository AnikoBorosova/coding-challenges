const fs = require("fs");
const tree = require("./tree.json");

function generateHtml(obj) {
 
 	//console.log(obj.type);
 	if (obj.type === "image") {
 		return `<img src="${obj.src}" />`;
 	}

 	if (obj.type === "text") {
 		return obj.value;
 	}

 	if(!obj.children) {
 		return "";
 	}
 // if multicol, col vagy body akkor egy td nyito es zarotag kozé fuzni a gyerekeiket
 	let childrenHtml = "";
 	for (let i = 0; i < obj.children.length; i++) {

 		const act = obj.children[i];
 		childrenHtml += generateHtml(act)

 		//console.log(obj.children[i].type);
 	}
 	return childrenHtml;
}


const final = generateHtml(tree.body);

console.log(final);

