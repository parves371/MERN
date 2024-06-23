const app = require("./app");
const config = require("./config/config");
const port = config.app.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
