require("dotenv").config();
const dev = {
  app: {
    PORT: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/usersdb",
  },
};

module.exports = dev;