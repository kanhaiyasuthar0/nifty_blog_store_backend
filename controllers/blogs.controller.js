const getdataByAuthor = () => {
  return async (req, res) => {
    res.send(req.body);
  };
};

const addBlogs = () => {
  return async (req, res) => {
    console.log(req.body);
    res.send(req.body);
  };
};

const getAllBlogs = () => {
  return async (req, res) => {
    console.log(req);
    res.send(req.body);
  };
};

const getdataByTitle = () => {
  return async (req, res) => {
    console.log(req);
    res.send(req.body);
  };
};
const likeBlog = () => {
  return async (req, res) => {
    console.log(req);
    res.send(req.body);
  };
};

module.exports = {
  getdataByAuthor,
  addBlogs,
  getAllBlogs,
  likeBlog,
  getdataByTitle,
};
