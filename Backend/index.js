const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
    console.log("Hello WORLD");
})

app.listen(PORT, ()=> {
    console.log(`The server is running on localhost:${PORT}`)
})