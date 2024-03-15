module.exports = reqFilter = (req, res, next) => {
    console.log('reqFilter');
    if (!req.query.age) {
        res.send('provide your age');
    }
    else if (req.query.age < 18) {
        res.send(`you are under age`);
    }
    else {

        next();
    };

};