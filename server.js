const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));


app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
})