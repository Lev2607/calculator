const express = require('express')
const app = express()

let port = 3000;

/*Anforderung ist: der Taschenrechner service soll die fähigkeit haben zwei Zahlen Addieren und subtrahieren zu können */

/* ADD */
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    console.log(`received: Number1:${req.params.num1}; Number2:${req.params.num2}` )
    let result = "";
    if (isNaN(req.params.num1) || isNaN(req.params.num2) ) {
        console.log('Ivalid DataTyp in Request')
        res.send('<h1>Ivalid DataTyp</h1>' )
    }else{
        result = num1 + num2
    }
    res.send({result})
});

/* SUB */
app.get('/sub/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    console.log(`received: Number1:${req.params.num1}; Number2:${req.params.num2}` )
    let result = "";
    if (isNaN(req.params.num1) || isNaN(req.params.num2) ) {
        console.log('Ivalid DataTyp in Request')
        res.send('<h1>Ivalid DataTyp</h1>' )
    }else{
        result = num1 - num2
    }
    res.send({result})
});

/* DIVISON */   
app.get('/div/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    console.log(`received: Number1:${req.params.num1}; Number2:${req.params.num2}` )
    let result = "";
    if (isNaN(req.params.num1) || isNaN(req.params.num2) ) {
        console.log('Ivalid DataTyp in Request')
        res.send('<h1>Ivalid DataTyp</h1>' )
    }else{
        result = num1 / num2
    }
    res.send({result})
});

/* MULTIPLIKATION */
app.get('/mul/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    console.log(`received: Number1:${req.params.num1}; Number2:${req.params.num2}` )
    let result = "";
    if (isNaN(req.params.num1) || isNaN(req.params.num2) ) {
        console.log('Ivalid DataTyp in Request')
        res.send('<h1>Ivalid DataTyp</h1>' )
    }else{
        result = num1 * num2
    }
    res.send({result})
});

/* EXPONENTIATION */
app.get('/exp/:base/:exponent', (req, res) => {
    const base = parseFloat(req.params.base);
    const exponent = parseFloat(req.params.exponent);
    console.log(`received: Base:${req.params.base}; Exponent:${req.params.exponent}` )
    let result = "";
    if (isNaN(req.params.base) || isNaN(req.params.exponent)) {
        console.log('Invalid DataType in Request')
        res.send('<h1>Invalid DataType</h1>' )
    } else {
        result = base ** exponent;
    }
    res.send({result});
});

/* WURZELBERECHNUNG */
app.get('/root/:num/:root', (req, res) => {
    const num = parseFloat(req.params.num);
    const root = parseFloat(req.params.root);
    console.log(`received: Number: ${req.params.num}; Root: ${req.params.root}`);
    let result = "";
    if (isNaN(req.params.num) || isNaN(req.params.root) || root <= 0) {
        console.log('Invalid Data in Request');
        res.send('<h1>Invalid Data</h1>');
    } else {
        result = num ** (1 / root);
    }
    res.send({ result });
});

/*Service*/
app.listen(port, () => {
    console.log(`Monolater service started on port ${port}`);
});