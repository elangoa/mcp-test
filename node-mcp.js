import express from "express"
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "MCP Server Running" });
});

app.listen(300
