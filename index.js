const express = require("express");
const app = express();

const port = 3000
app.listen(port, () => {
  console.log("You are listening to port 3000");
})

app.get('/:route/:operation', (req, res) => {
    let route = req.params.route;
    let operation = req.params.operation;
    let inputs = req.query

    let values = Object.values(input)

    const operator = symbol => {
        let add = "+";
        let sub = "-";
        let mul = "*";
        let div = "/";
        if (symbol === "add") {
            return add;
        } else if (symbol === "sub") {
            return sub;
        } else if (symbol === "mul") {
            return mul
        } else if (symbol === "div") {
            return div
        }
    }

    let result = 0;
    if (operation === "add") {
        result = values.reduce((acc, el) =>{
            return parseInt(acc) + parseInt(el)
        })
    } else if (operation === "sub") {
        result = values.reduce((acc, el) =>{
            return parseInt(acc) + parseInt(el)
        })
    } else if (operation === "mul") {
        result = values.reduce((acc, el) =>{
            return parseInt(acc) * parseInt(el)
        })
    } else if (operation === "div") {
        result = values.reduce((acc, el) =>{
            return parseInt(acc) / parseInt(el)
        })
    }
    let output = {
        input: inputs,
        substring: values.join(`${operator(operation)}`),
        result: result,
    }
    res.send(output)

})

});