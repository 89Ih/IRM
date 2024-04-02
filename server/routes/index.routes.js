const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Plan = require("../models/Plan.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
// Find user
router.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const username = user.name;
    res.json({ msg: "User", username });
  } catch (error) {
    console.error(error);
  }
});

// Users and its assignd plans ...
router.get("/userPlans", async (req, res) => {
  const users = await User.aggregate([
    {
      $lookup: {
        from: "plans",
        localField: "user",
        foreignField: "name",
        as: "userPlans",
      },
    },
  ]);
  res.json(users);
});
// Amount workload based on user and week
router.get("/totalAmountWorkload/:encodedObj", async (req, res) => {
  const encodedObj = req.params.encodedObj;
  const decodedObj = JSON.parse(decodeURIComponent(encodedObj));
  const parseObj = {
    user: decodedObj.user,
    weekOfYear: parseInt(decodedObj.weekOfYear),
  };

  const amount = await Plan.aggregate([
    { $match: parseObj },
    {
      $group: {
        _id: null,
        totalAmountSold: { $sum: "$workload" },
      },
    },
    {
      $addFields: {
        totalAmountSold: { $ifNull: ["$totalAmountSold", 0] },
      },
    },
  ]);

  res.status(200).json(amount);
});

//All All Plans..
router.get("/plans", async (req, res) => {
  const allPlans = await Plan.find();
  res.status(200).json({ msg: "this is all plans", allPlans });
});
// Clone plan ...
router.post("/plan/:id", async (req, res) => {
  try {
    const copied = await Plan.findById(req.params.id);
    const weekBody = req.body.week;
    const workloadBody = req.body.workload;
    const { plan, description, owner, priority, year, month, user, createdBy } =
      copied;

    const createPlan = await Plan.create({
      plan,
      description,
      owner,
      priority,
      year,
      month,
      week: weekBody,
      user,
      createdBy,
      workload: workloadBody,
    });

    res.status(201).json({ msg: "Succesfully Cloned", createPlan });
  } catch (err) {
    console.error(err);
  }
});
// Get Plan id
router.get("/plan/:id", async (req, res) => {
  const { id } = req.params;
  const planByid = await Plan.findById(id);
  res.status(200).json({ planByid });
});
// Create plan ...
router.post("/plan", async (req, res) => {
  try {
    const {
      plan,
      description,
      owner,
      priority,
      year,
      month,
      user,
      createdBy,
      workload,
      weekOfYear,
    } = req.body;

    const data = {
      plan,
      description,
      owner,
      priority,
      year,
      month,
      user,
      createdBy,
      workload,
      weekOfYear,
    };

    const createPlan = await Plan.create(data);

    res.status(201).json({ msg: "Succesfully Created", createPlan });
  } catch (err) {
    console.error(err);
  }
});
// Update plan ...
router.put("/plan/:id", async (req, res) => {
  const { id } = req.params;

  const {
    plan,
    description,
    owner,
    priority,
    year,
    month,
    week,
    user,
    createdBy,
    workload,
    weekOfYear,
  } = req.body;

  const data = {
    plan,
    description,
    owner,
    priority,
    year,
    month,
    week,
    user,
    createdBy,
    workload,
    weekOfYear,
  };

  const UpdatePlan = await Plan.findByIdAndUpdate(id, data, { new: true });

  res.json({ msg: "Succesfully Deleted", UpdatePlan });
});
// Delete plan ...
router.delete("/plan/:id", async (req, res, next) => {
  const { id } = req.params;
  const deletePlan = await Plan.findByIdAndDelete(id);

  res.json({ msg: "Succesfully Deleted", deletePlan });
});
module.exports = router;
