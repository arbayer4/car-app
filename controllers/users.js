const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Car = require("../models/car");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "?$5akhasd/ans)]./qw";

const signUp = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      phone,
      password_digest,
    });
    await user.save();
    const payload = {
      username: user.username,
      email: user.email,
      phone: user.phone,
      _id: user._id,
    };
    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    console.log(user);
    console.log(user);
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
        _id: user._id,
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

const changePassword = async (req, res) => {};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("cars");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findOne({ username: req.params.id }).populate(
      "cars"
    );
    console.log(user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
  verify,
  changePassword,
  getUsers,
  getUser,
};
