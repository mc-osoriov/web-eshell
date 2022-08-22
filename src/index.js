import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hiiiiiii bithc</h1>");
});

app.listen(process.env.PORT || 3000);
console.log("server on port", process.env.PORT || 3000);
