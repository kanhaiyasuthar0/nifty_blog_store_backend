const mongoose = require("mongoose");
const blogsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    labels: [{ type: String }],

    likes: { type: Number },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("blogs", blogsSchema);
module.exports = Blogs;
