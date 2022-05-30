const Blogs = require("../models/blog");

//search data with author
const getdataByAuthor = () => {
  return async (req, res) => {
    let all = await Blogs.find({}).lean().exec();
    let filtered = all.filter((ele) => ele.author == req.body.author);

    res.send(filtered);
  };
};

// add new blog to bakcend
const addBlogs = () => {
  return async (req, res) => {
    let response = await Blogs.insertMany([req.body]);
    console.log(response);
    res.send(response);
  };
};

//fetch all blogs sorted as per likes
const getAllBlogs = () => {
  return async (req, res) => {
    let all = await Blogs.find({}).lean().exec();
    all = all.sort((a, b) => b.likes - a.likes);
    res.send(all);
  };
};

//search data with title
const getdataByTitle = () => {
  return async (req, res) => {
    let all = await Blogs.find({}).lean().exec();
    console.log(all);
    let filtered = all.filter((ele) => ele.title == req.body.title);

    res.send(filtered);
  };
};

//like particular blog : get by id and incerementing likes
const likeBlog = () => {
  return async (req, res) => {
    let items = await Blogs.findOne({ id: req.body.id });

    items.likes = items.likes + 1;
    let item = await Blogs.updateOne(
      { title: req.body.title },
      { $set: items }
    );

    res.send(`${items.likes}`);
  };
};

//fetch particular blog with id
const viweBlog = () => {
  return async (req, res) => {
    let items = await Blogs.findOne({ id: req.body.id });

    res.send(items);
  };
};

//default
const greet = () => {
  return async (req, res) => {
    res.send(
      '<h1>All paths<h1/><br><p> https://blog-backned.herokuapp.com/ <p/><img src="https://i.ibb.co/Ryd3J1M/Blog-post.gif"/>'
    );
  };
};

module.exports = {
  greet,
  getdataByAuthor,
  addBlogs,
  getAllBlogs,
  likeBlog,
  getdataByTitle,
  viweBlog,
};
