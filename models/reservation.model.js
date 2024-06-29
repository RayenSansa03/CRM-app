const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ReservationSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    project: {
      type: String,
      ref: "Project",
      required: true,
    },
    equipment: {
      type: String,
      ref: "Equipment",
      required: true,
    },
    dateDebut: {
      type: Date,
      required: true,
    },
    dateFin: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = Reservation;