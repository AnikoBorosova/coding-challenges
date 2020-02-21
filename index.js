const fs = require("fs");
const tree = JSON.parse(fs.readFileSync("tree.json", "utf8"));

const textPattern = `"%%VALUE%%"`;
const imagePattern = `image: (%%SRC%%)`;

function generateHTMLForNode(type, childrenContent, node) {
    if (type === "text") {
        return `<div class="nodetext">${node.value}</div>"`;
    }

    if (type === "image") {
        return `<div class="nodeimage"><img src="${node.src}" alt="${node.alt || ""}" /></div>`;
    }

    if (type === "body") {
        return `<!DOCTYPE HTML><html> <head></head> <body style="background-color: ${node.background}">
<div class="vertical">${childrenContent.join("<div>\n</div class=\"vertical\">")}</div>
</body></html>`;
    }

    if (type === "col") {
        return `<div class="vertical">${childrenContent.join("<div>\n</div class=\"vertical\">")}</div>`;
    }

    if (type === "multicol") {
        return `<div class="horizontal">${childrenContent.join("<div>\n</div class=\"horizontal\">")}</div>`;
    }

    return `type: ${type} \n ${childrenContent.join("\n")}`;
}


function getHtml(node) {

    const type = node.type;
    const childrenContent = [];
    if (node.children) {
        node.children.forEach(child => {
            childrenContent.push(getHtml(child));
        });
    }
    return generateHTMLForNode(type, childrenContent, node);
    //return type + "\n" + childrenContent.join("\n");

}

console.log(getHtml(tree.body));

fs.writeFileSync("./generatedHTML.html", getHtml(tree.body));