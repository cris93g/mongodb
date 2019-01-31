require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const ctrl = require("./controllers/controller");

// makes local server
const app = express();
//makes port for server
const port = process.env.port || 3001;
//brings in mongoose
const mongoose = require("mongoose");
const http = require("http");
const server = http.createServer(app);
//connects to mongo db databe
const db = process.env.mongoURI;
mongoose
	.connect(db)
	.then(() => console.log("we found it, the rainbow connection!"))
	.catch(err => console.log(err));
//makes route to get products from route folder
app.get("/api/products", ctrl.getAllProducts);
//checks up on server
server.listen(port, () => {
	console.log(`app is running in server port ${port}`);
});
