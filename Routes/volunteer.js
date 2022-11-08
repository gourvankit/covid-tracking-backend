const router = require("express").Router();
const Volunteer = require("../Models/Volunteer");
router.post("/", async (req, res) => {
  const newList = new Volunteer(req.body);
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
    const users = query
      ? await Volunteer.find().limit(10)
      : await Volunteer.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(403).json("You are not authorized user");
  }
});
router.delete("/:id", async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deletedUser = await Volunteer.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are advised to delete only your data");
  }
});
//GET
router.get("/find/:id", async (req, res) => {
  try {
    const foundUser = await Volunteer.findById(req.params.id);
    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
