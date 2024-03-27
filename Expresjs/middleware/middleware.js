/**
 * Middleware function that checks the user's age from the query parameters.
 * If age is not provided, it responds with a request to provide age.
 * If age is less than 18, it responds that the user is underage.
 * Otherwise calls next() to pass control to next middleware.
 */
module.exports = reqFilter = (req, res, next) => {
  console.log("reqFilter");
  if (!req.query.age) {
    res.send("provide your age");
  } else if (req.query.age < 18) {
    res.send(`you are under age`);
  } else {
    next();
  }
};
