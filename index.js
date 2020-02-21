const fs = require("fs");

const tree = JSON.parse(fs.readFileSync("tree.json", "utf8"));

console.log(tree);

const textPattern = `"%%VALUE%%"`;
const imagePattern = `image: (%%SRC%%)`;

function generatePlainTextForNode(type, childrenContent, node) {
    if (type === "text") {
        return `"${node.value}"`;
    }
    if (type === "image") {
        return `image: (${node.src})`;
    }
    if (type === "body") {
        return `==========================================
${childrenContent.join("\n------------------------------------------\n")}
==========================================`
    }
    if (type === "col") {
        return childrenContent.join("\n------------------------------------------\n");
    }
    if (type === "multicol") {
        return childrenContent.join("\n++++++++++++++++++++++++++++++++++++++++++\n");
    }
    return `type: ${type} \n ${childrenContent.join("\n")}`;
}

function plainText(node) {
    const type = node.type;
    const childrenContent = [];
    let i = 0;
    if (node.children) {
        node.children.forEach(child => {
            // childrenContent.push(plainText(child)) 
            childrenContent[i] = plainText(child);
            i++;
        });
    }
    return generatePlainTextForNode(type, childrenContent, node);
}

function generateHTMLForNode(type, childrenContent, node) {
    if (type === "text") {
        return `<div class="nodetext">${node.value}</div>`;
    }
    if (type === "image") {
        return `<div class="nodeimage"><img src="${node.src}" alt="${node.alt || ""}" /></div>`;
    }
    if (type === "body") {
        return `<!DOCTYPE HTML><html> <head></head> <body style="background-color: ${node.background}">
<div class="vertical">${childrenContent.join("</div>\n<div class=\"vertical\">")}</div>
</body></html>`;
    }
    if (type === "col") {
        return `
<div class="vertical">${childrenContent.join("</div>\n<div class=\"vertical\">")}</div>
`;
    }
    if (type === "multicol") {
        return `
<div class="horizontal">${childrenContent.join("</div>\n<div class=\"horizontal\">")}</div>
`;
    }
    return `type: ${type} \n ${childrenContent.join("\n")}`;
}

function getHTML(node) {
    const type = node.type;
    const childrenContent = [];
    let i = 0;
    if (node.children) {
        node.children.forEach(child => {
            // childrenContent.push(plainText(child)) 
            childrenContent[i] = getHTML(child);
            i++;
        });
    }
    return generateHTMLForNode(type, childrenContent, node);
}

console.log(getHTML(tree.body));

fs.writeFileSync("./generatedHTML.html", getHTML(tree.body));


