const app = require("./app");

const config = require("./config/config");
const PORT = config.app.port;
require("./config/db")

app.listen(PORT, () => {
  console.log(`your server is running on https:localhost:${PORT}`);
});
