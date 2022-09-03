const fs = require("fs");

module.exports.getRandomUser = (req, res, next) => {
  fs.readFile(`./public/users.json`, (err, data) => {
    if (err) {
      next(err);
    } else {
      const parsedData = JSON.parse(data);
      const randomIndex = Math.floor(Math.random() * parsedData.length);
      res.send(parsedData[randomIndex]);
    }
  });
};

module.exports.getAll = (req, res, next) => {
  fs.readFile(`./public/users.json`, (err, data) => {
    if (err) {
      next(err);
    } else {
      const parsedData = JSON.parse(data);
      if (req.query.limit) {
        const limit = req.query.limit;
        const limitedData = parsedData.slice(0, limit);
        res.send(limitedData);
      } else {
        res.send(parsedData);
      }
    }
  });
};
module.exports.addUser = (req, res, next) => {
  fs.readFile(`./public/users.json`, (err, data) => {
    if (err) {
      next(err);
    } else {
      const parsedData = JSON.parse(data);
      const newData = req.body;
      newData.id = parsedData.length + 1;
      parsedData.push(newData);
      fs.writeFile("./public/users.json", JSON.stringify(parsedData), (err) => {
        if (err) {
          next(err);
        } else {
          res.status(200).send({ success: true, message: "user added successfully" });
        }
      });
    }
  });
};
