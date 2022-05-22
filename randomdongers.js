const express = require("express");
var app = express()
const utils = require('./utils.js');
const dongers = require('./dongers.json');


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("random dongers api online")
})


   app.get("/randomdongers", async (req, res) => {
        const donger = utils.randArray(dongers);
        let response = {
              status: "success",
              category: "dongers",
              result: donger
           }
     return res.status(200).send(response)
                
             })
