const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user-route');
const blogRouter = require('./routes/blog-route');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/v1/api/user", userRouter);
app.use("/v1/api/blog", blogRouter);

mongoose.connect("mongodb+srv://paraspuru143:RIpWKDfzfnqOuq0n@parascluster.q5hebjq.mongodb.net/Blog?retryWrites=true&w=majority").then(() => {
    app.listen(PORT, ()=> {
        console.log(`The server is running on localhost:${PORT}`)
    })
}).then(() => {
    console.log(`DB connected successfully!!`)
}).catch((error) => {
    console.log(`Error in DB while connecting`);
})

app.use("/", (req, res, next) => {
    res.send("Hello World");
})

