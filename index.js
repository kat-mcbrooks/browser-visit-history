const express = require("express");
const cors = require("cors"); //to support secure cross-origin requests and data transfers between browsers and servers
const app = express(); //create a new express object and this is how we interact with the express library
const port = process.env.PORT || 5000;
const path = require("path");
