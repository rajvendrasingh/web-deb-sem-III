const express = require("express");

const app = express();

const trainerRouter = require("./routes/trainer.route");
const studenRouter = require("./routes/studen.routes");

app.use("/trainer",trainerRouter);we
app.use("/studen",studenRouter);


app.listen(1689,() =>{
    console.log("server is running on the port 1689")
})