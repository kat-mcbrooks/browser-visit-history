const express = require("express");
const cors = require("cors"); //to support secure cross-origin requests and data transfers between browsers and servers
const app = express(); //create a new express object and this is how we interact with the express library
const port = process.env.PORT || 5000;
const path = require("path");
const visitHistory = require("./models/visitHistory");
const historyModel = new visitHistory();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
//set EJS as the templating engine with Express
app.set("view engine", "ejs");

// GET method route, when user visits the '/' url, making a GET request
app.get("/", (req, res) => {
  const newVisit = historyModel.addVisit(req.headers["user-agent"]);
  // render the index page
  res.render("pages/index");
  if (newVisit) {
    console.log(`new visit added to the log`);
  }
});

// GET method route, when user visits the '/visithistory' url, making a GET request
app.get("/visithistory", (req, res) => {
  console.log("in the get /visithistory");
  const visitHistory = historyModel.getVisitHistory();
  res.render("pages/visitHistory", { visitHistory: visitHistory });
});
// starts the server and listens on the port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
