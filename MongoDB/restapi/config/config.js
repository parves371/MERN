require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || "mpngodb://localhost:27017/usersdb",
  },
};

module.exports = dev;
