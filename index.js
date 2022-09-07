const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


app.post('/', (req, res)  => {
    console.log(req.body); //printing the received payload
    res.status(200).end;  //responding to the organization API
})

const PORT = 4567;

app.listen(PORT, () => {
    console.log(`Server running on port no ${PORT}`);
});

