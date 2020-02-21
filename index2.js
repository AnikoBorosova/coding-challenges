const optree1 = {
    type: "operation",
    operator: "+",
    operands: [
        {
            type: "number",
            value: 2,
        },
        {
            type: "number",
            value: 7,
        },
    ],
};


const optree2 = {
    type: "operation",
    operator: "*",
    operands: [
        {
            type: "number",
            value: 5,
        },
        {
            type: "number",
            value: 3,
        },
    ],
};


const optree3 = {
    type: "operation",
    operator: "-",
    operands: [
        {
            type: "operation",
            operator: "*",
            operands: [
                {
                    type: "number",
                    value: 5,
                },
                {
                    type: "number",
                    value: 3,
                },
            ],
        },
        {
            type: "operation",
            operator: "/",
            operands: [
                {
                    type: "operation",
                    operator: "+",
                    operands: [
                        {
                            type: "operation",
                            operator: "*",
                            operands: [
                                {
                                    type: "number",
                                    value: 3,
                                },
                                {
                                    type: "number",
                                    value: 7,
                                },
                            ],
                        },
                        {
                            type: "number",
                            value: 1,
                        },
                    ],
                },
                {
                    type: "number",
                    value: 2,
                },
            ],
        }
    ],
};

// -------------------------------------------------
/*
function visualize1(optree) {
    return `${optree.operands[0].value} ${optree.operator} ${optree.operands[1].value}`;
}

const result = visualize(optree1);
//console.log(result);

const result2 = visualize(optree2);
//console.log(result2);


function calculate1(optree) {
    if (optree.operator === "+") {
        return optree.operands[0].value + optree.operands[1].value;
    }

    if (optree.operator === "-") {
        return optree.operands[0].value - optree.operands[1].value;
    }

    if (optree.operator === "*") {
        return optree.operands[0].value * optree.operands[1].value;
    }

    if (optree.operator === "/") {
        return optree.operands[0].value / optree.operands[1].value;
    }
}

const sscalculate1 = calculate1(optree2);
//console.log(calculate1);
*/
// ----------------------------------------
function visualize(optree) {

    if (optree.type === "operation") {
        const left = visualize(optree.operands[0]);
        const right = visualize(optree.operands[1]);

        return `(${left} ${optree.operator} ${right})`;
    }

    if (optree.type === "number") {
        return optree.value;
    }
}

function calculate(optree) {

    if (optree.type === "number") {
        return optree.value;
    }

    if (optree.type === "operation") {

        if (optree.operator === "+") {
            return calculate(optree.operands[0]) + calculate(optree.operands[1]);
        }

        if (optree.operator === "-") {
            return calculate(optree.operands[0]) - calculate(optree.operands[1]);
        }

        if (optree.operator === "*") {
            return calculate(optree.operands[0]) * calculate(optree.operands[1]);
        }

        if (optree.operator === "/") {
            return calculate(optree.operands[0]) / calculate(optree.operands[1]);
        }
    }
}

console.log(visualize(optree3))
console.log(calculate(optree3))