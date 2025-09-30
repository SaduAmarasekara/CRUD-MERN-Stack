const app = require("./app"); // ✅ fixed typo
const port = 3001; // ✅ make it a number
const host = "127.0.0.1";

const server = app.listen(port, host, () => {
  console.log(`Node server is listening at http://${host}:${port}`);
});
