const { Schema, model } = require("mongoose");

const planSchema = new Schema(
  {
    plan: {
      type: String,
      required: true,
      maxlength: 18

    },
    description: {
      type: String,
    },
    owner: {
      type: String,

    },
    priority: {
      type: String,
      enum: ["Low", "Normal", "High"],
      default: "Normal",
    },
    year: {
      type: String,
    },
    month: {
      type: String,
    },
    week: {
      type: String,
      enum: ["01", "02", "03", "04"],
    },
    workload: {
      type: Number,
      required: true,
      enum: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      default: 20
    },
    weekOfYear: {
      type: Number,
      enum: Array.from({ length: 52 }, (_, i) => i + 1),
      default: 0
    },
    user: {
      type: String,
    },
    createdBy: {
      type: String,
      // type: Schema.Types.ObjectId,
      // ref: "User"
    }
  },
  {

    timestamps: true,
  }
);

const Plan = model("Plan", planSchema);

module.exports = Plan;
