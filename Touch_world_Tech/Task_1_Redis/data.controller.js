import redis from "./redisClient.js";

export const dataController = {
  storeData: (req, res, next) => {
    console.log("store");
    const { key, value } = req.body;
    try {
      redis.set(key, value);
      res.status(201).send("Data stored in Redis");
    } catch (error) {
      next(error);
    }
  },

  retrieveData: (req, res, next) => {
    const { key } = req.params;
    try {
      redis.get(key, (err, value) => {
        if (err) {
          res.status(500).send("Error retrieving data from Redis");
        } else {
          res.status(200).send(value);
        }
      });
    } catch (error) {
      next(error);
    }
  },
};
