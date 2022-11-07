const router = require("express").Router();
const Events = require("../Models/Events");
router.post("/", async (req, res) => {
  const newList = new Events(req.body);
  try {
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query ? await Events.find().limit(10) : await Events.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(403).json("You are not authorized user");
  }
});
module.exports = router;
