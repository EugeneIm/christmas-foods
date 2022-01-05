const express = require('express')

const app = express()
app.use(express.json())


const food = ["Roast Turkey", "Mince Pie", "Stuffing", "Yule Log"]
app.get("/api/foods", (req, res) => {
    res.send(food)
    //const foods = food[Math.floor(Math.random()*food.length)]
    //res.send(foods)
})

app.post("/api/foods", (req, res) => {
    
    const foodNames = req.body.name
    food.push(foodNames)
    res.send(req.body)
})

app.listen(8080, () => console.log('listening on port 8080'))