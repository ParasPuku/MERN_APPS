const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/v1/api/user", router);

mongoose.connect("mongodb+srv://paraspuru143:RIpWKDfzfnqOuq0n@parascluster.q5hebjq.mongodb.net/Blog?retryWrites=true&w=majority").then(() => {
    app.listen(PORT, ()=> {
        console.log(`The server is running on localhost:${PORT}`)
    })
}).then(() => {
    console.log(`DB connected successfully!!`)
}).catch((error) => {

})

app.use("/", (req, res, next) => {
    res.send("Hello World");
})

