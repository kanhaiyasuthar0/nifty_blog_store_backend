const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://kanhaiya:kanhaiya@cluster0.vg1rcnh.mongodb.net/test"
    )
    .then(() => {
      console.log("Connected to database successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connect;
