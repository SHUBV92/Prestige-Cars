const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const server = require("http").createServer(app);

server.listen(process.env.PORT || 9000);

app.use(
  express.static(
    path.join(__dirname, "client/build")
  )
);
app.use(
  bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());
app.get("*", function (req, res) {
  res.sendFile(
    path.join(
      __dirname,
      "client/build",
      "index.html"
    )
  );
});

app.get("/", (req, res) => {
  res.send("Send Your Email to /send");
});

app.post("/send", (req, res) => {
  console.log("Send");
  console.log(req.body);