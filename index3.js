const fs = require("fs");
const tree = JSON.parse(fs.readFileSync("tree.json", "utf8"));

const textPattern = `"%%VALUE%%"`;
const imagePattern = `image: (%%SRC%%)`;

function generatePlainTetxForBode(type, childrenContent, node) {
    if (type === "text") {
        return `"${node.value}"`;
    }

    if (type === "image") {
        return `image : (${node.src})`;
    }

    if (type === "body") {
        return `================\n${childrenContent.join("\n----------------------\n")}\n======================`
    }

    if (type === "col") {
        return `${childrenContent.join("\n----------------------\n")}`
    }

    if (type === "multicol") {
        return `${childrenContent.join("\n++++++++++++++++++++++\n")}`
    }

    return `type: ${type} \n ${childrenContent.join("\n")}`;
}


function plainText(node) {

    const type = node.type;
    const childrenContent = [];
    if (node.children) {
        node.children.forEach(child => {
            childrenContent.push(plainText(child));
        });
    }
    return generatePlainTetxForBode(type, childrenContent, node);
    //return type + "\n" + childrenContent.join("\n");

}

console.log(plainText(tree.body));