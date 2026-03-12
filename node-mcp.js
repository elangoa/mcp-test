import express from "express"
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "MCP Server Running" });
});

app.listen(3000, () => {
  console.log("Server started");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
