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
​
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
​
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