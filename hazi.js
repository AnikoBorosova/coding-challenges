const fs = require("fs");

const tableContent = "<table>";

for (var i = 0; i < 10; i++) {

}

tableContent += "</table>";

fs.writeFileSync("./myfile.html", tableContent, "utf8");
