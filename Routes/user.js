const router = require("express").Router();
const Input = require("../Models/Input");
router.post("/", async (req, res) => {
  const newList = new Input(req.body);
  try {
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE
router.put("/:id", async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updatedUser = await Input.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are advised to update only your data");
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deletedUser = await Input.findByIdAndDelete(req.params.id);
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
    const foundUser = await Input.findById(req.params.id);
    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  const query = req.query.new;

  try {
    const users = query ? await Input.find().limit(10) : await Input.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(403).json("You are not authorized user");
  }
});
module.exports = router;
