const fs = require("fs");

// get a random user from all user
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

// get all user and query by limit
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

// add a new user
module.exports.addUser = (req, res, next) => {
  fs.readFile(`./public/users.json`, (err, data) => {
    if (err) {
      next(err);
    } else {
      const parsedData = JSON.parse(data);
      if (req.body.gender && req.body.name && req.body.contact && req.body.adress && req.body.photoUrl) {
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
      } else {
        res.send({ success: false, message: "please provide all necessary data" });
      }
    }
  });
};

// update a user info (reference by id)
module.exports.updateUser = (req, res, next) => {
  fs.readFile(`./public/users.json`, (err, data) => {
    if (err) {
      next(err);
    } else {
      const parsedData = JSON.parse(data);
      const ids = parsedData.map((i) => i.id);
      const exist = ids.includes(req.body.id);
      if (req.body.gender && req.body.name && req.body.contact && req.body.adress && req.body.photoUrl && exist) {
        const updatedDoc = parsedData.find((d) => d.id === req.body.id);
        const index = parsedData.indexOf(updatedDoc);
        parsedData[index] = req.body;
        fs.writeFile("./public/users.json", JSON.stringify(parsedData), (err) => {
          if (err) {
            next(err);
          } else {
            res.status(200).send({ success: true, message: "user updated successfully" });
          }
        });
      } else {
        res.send({ success: false, message: "invalid data in body" });
      }
    }
  });
};

// update multiple user info (reference by id)
module.exports.bulkUpdate = (req, res, next) => {
  fs.readFile(`./public/users.json`, (err, data) => {
    if (err) {
      next(err);
    } else {
      const parsedData = JSON.parse(data);
      const ids = parsedData.map((i) => i.id);
      if (Array.isArray(req.body)) {
        for (user of req.body) {
          
          const exist = ids.includes(user.id);
          if (exist) {
            const updatedDoc = parsedData.find((d) => d.id === user.id);
            const index = parsedData.indexOf(updatedDoc);
            parsedData[index] = user;
            console.log(user);
            fs.writeFile("./public/users.json", JSON.stringify(parsedData), (err) => {
              if (err) {
                next(err);
              } else {
                res.status(200).send({ success: true, message: "user updated successfully" });
              }
            });
          } else {
            res.send({ success: false, message: "invalid data in body" });
          }
        }
      } else {
        res.send({ success: false, message: "body should be array of object" });
      }
    }
  });
};

//delete a user
module.exports.deleteUser = async (req, res, next) => {
  fs.readFile(`./public/users.json`, (err, data) => {
    if (err) {
      next(err);
    } else {
      const parsedData = JSON.parse(data);
      const ids = parsedData.map((i) => i.id);
      const exist = ids.includes(parseInt(req.params.id));
      if (exist) {
        const updatedDoc = parsedData.find((d) => d.id === parseInt(req.params.id));
        const index = parsedData.indexOf(updatedDoc);
        parsedData.splice(index, 1);
        fs.writeFile("./public/users.json", JSON.stringify(parsedData), (err) => {
          if (err) {
            next(err);
          } else {
            res.status(200).send({ success: true, message: "user deleted successfully" });
          }
        });
      } else {
        res.send({ success: false, message: "invalid data in body" });
      }
    }
  });
};
