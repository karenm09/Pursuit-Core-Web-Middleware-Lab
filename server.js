const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));


let animalArr = ["dog", "cat", "bird", "snake", "frog", "lion"];

const isAnimal = (req, res, next) => {
   let animal = req.params.animal
      if(animalArr.includes(animal)){
         next();
         res.json({
            status: "success",
            message: true
         }) 
      } else {
         res.json({
            status: "fail",
            message: false
         })
      }
     
   }

app.get("/animal/:animal", isAnimal, (req, res) => {
   console.log(req.params)
})

const generateSpread = (req, res, next) => {
   let spread = [];
   let min = Number(req.query.floor);
   let max = Number(req.query.ceil);

   let current = min
   while(current <= max) {
      spread.push(current);
      current++
   }

   let randomNum = spread[Math.floor(Math.random() * spread.length)];
   res.json({
      status: "success",
      range: [min, max],
      randPick: randomNum
   })
}

app.get("/random", generateSpread, (req, res) => {
   console.log(req.query);
})

let queue = ["xaviar", "michelle", "corey", "reed"]

const handleQueue = (req, res, next) => {
   let action = req.params.action;
   if(action === "peek") {
      res.json({
         status: "success",
         data: queue[queue.length-1]
      })
   } else if(action === "enqueue") {
      queue.unshift(req.query.name)
      res.json({
         status: "success",
         enqueued: queue[0]
      })
   } else if(action === "dequeue"){
      res.json({
         status: "success",
         dequeued: queue.pop()
      })
   }
}

app.get("/queue/:action", handleQueue, (req, res) => {

})

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
})