const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app