const Blogs = require("../models/blog");
const getdataByAuthor = () => {
  return async (req, res) => {
    let all = await Blogs.find({}).lean().exec();
    let filtered = all.filter((ele) => ele.author == req.body.author);

    res.send(filtered);
  };
};

const addBlogs = () => {
  return async (req, res) => {
    let response = await Blogs.insertMany([req.body]);
    console.log(response);
    res.send(response);
  };
};

const getAllBlogs = () => {
  return async (req, res) => {
    let all = await Blogs.find({}).lean().exec();
    all = all.sort((a, b) => b.likes - a.likes);
    res.send(all);
  };
};

const getdataByTitle = () => {
  return async (req, res) => {
    let all = await Blogs.find({}).lean().exec();
    console.log(all);
    let filtered = all.filter((ele) => ele.title == req.body.title);

    res.send(filtered);
  };
};
const likeBlog = () => {
  return async (req, res) => {
    let items = await Blogs.findOne({ title: req.body.title });

    items.likes = items.likes + 1;
    let item = await Blogs.updateOne(
      { title: req.body.title },
      { $set: items }
    );

    res.send(`${items.likes}`);
  };
};
const viweBlog = () => {
  return async (req, res) => {
    let items = await Blogs.findOne({ id: req.body.id });

    res.send(items);
  };
};

module.exports = {
  getdataByAuthor,
  addBlogs,
  getAllBlogs,
  likeBlog,
  getdataByTitle,
  viweBlog,
};
