const express = require("express");
const app = express();

app.use(express.json())

const agents = [
  {
    id: 1,
    name: "Jett",
    type: "Duelists"
  }
]

app.get("/api/agents", (req, res) => {
  res.send({agent: agents})
});

app.post("/api/agents", (req, res) => {
  const data = req.body
  data.id = agents.length+1
  agents.push(data)
  res.send(data)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))