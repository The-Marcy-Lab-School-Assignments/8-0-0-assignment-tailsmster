const express = require ('express');
const app = express();
const marcyRoundTable = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];

/// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}
const serveCheese = (req, res, next) => {
    res.send('<img alt="cheese" src="https://media.istockphoto.com/id/1127471287/photo/cheese-on-white.jpg?s=612x612&w=0&k=20&c=m8kJAfayGrBoqKceiwGAq7SaEDrbZCyPzklYOm3_MBk=" />');
}
const serveHello = (req, res, next) => {
    const name = req.query.name || "stranger";
    res.send(`hello ${name}!`);
}
const serveData = (req, res, next) => {
    const data = marcyRoundTable;
    res.send(data);
}

// endpoints
app.get('/', serveIndex);

app.get('/cheese', serveCheese);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);



//listener
const port = process.env.port || 3000;

app.listen(3000, () => {
    console.log('http://localhost:3000/');
});