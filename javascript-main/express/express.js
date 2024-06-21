const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/submitdata', (req, res) => {
    const data = req.body;
    console.log("Received data:", data);
    res.send("On submit page. Data received successfully!");
});

app.post('/submitdata', (req, res) => {
    const data = req.body;
    console.log("Received data:", data);
    res.send("On submit page. Data received successfully!");
});

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/nextpage', (req, res) => {
    res.send("At next page");
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
