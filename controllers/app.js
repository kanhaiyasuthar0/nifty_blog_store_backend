const express = require("express");
const app = express();
const cors = require("cors");
const blogsController = require("./blogs.controller");
app.use(express.json([]));
app.use(cors());
app.post("/author", blogsController.getdataByAuthor());
app.post("/add", blogsController.addBlogs());
app.get("/all", blogsController.getAllBlogs());
app.post("/title", blogsController.getdataByTitle());
app.post("/like", blogsController.likeBlog());

// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send(req);
// });
module.exports = app;
