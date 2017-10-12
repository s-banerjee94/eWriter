const express = require('express');
const bodyparser = require('body-parser');

let app = express();

//server
app.listen(3000, () => {
    console.log("Server Running");
});