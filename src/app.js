const express = require('express');
require("../src/db/connect");
const router = require("../src/routers/route");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Server started on the port ${port}`);
});