
const express = require('express');

app = express();

app.use(express.static('public'))

const port = 8080;


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));