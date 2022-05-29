const mongoose = require("mongoose");
const blogsSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  labels: [{ type: String }],

  likes: { type: Number },
});

const Blogs = mongoose.model("blogs", blogsSchema);
module.exports = Blogs;
