const http = require("http");
const port = process.env.PORT || 8000;
const app = require("./controllers/app");
const connect = require("./database/db");

http.createServer(app).listen(port, async () => {
  console.log(`listening at port ${port}`);
  await connect();
});
