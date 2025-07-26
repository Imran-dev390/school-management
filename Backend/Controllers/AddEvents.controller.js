const Event = require("../models/events.model");
const Session = require('../models/Session.model');
const mongoose = require("mongoose");
// Create event
// const AddEvents = async (req, res) => {
//   try {
//     const { title, eventDate, description } = req.body;
//     if(!title || !eventDate || !description){
//         return res.status(400).json({message:"All Field Are Required"});
//     }
//     const currentYear = new Date().getFullYear();
//     const currentSession = await Session.findOne({startDate:currentYear});
//     console.log("currentSession",currentSession);
//     console.log("currentYear",currentYear);
//     const newEvent = new Event({
//       title,
//       eventDate: eventDate ? new Date(eventDate) : undefined,
//       description,
//     });

//     if (req.file) {
//       newEvent.image = {
//         data: req.file.buffer,
//         contentType: req.file.mimetype,
//       };
//     }
//     await newEvent.save();
//     res.status(201).json({ message: 'Event created successfully' });
//   } catch (error) {
//     console.error('Error creating event:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// }




//const mongoose = require("mongoose");

const AddEvents = async (req, res) => {
  try {
    const { title, eventDate, description } = req.body;

    if (!title || !eventDate || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const today = new Date();

    // 🎯 Find current session
    const currentSession = await Session.findOne({
      startDate: { $lte: today },
      endDate: { $gte: today },
    });

    if (!currentSession) {
      return res.status(404).json({ message: "No active session found" });
    }

    // 📛 Check if an event with the same title and date already exists
    const existingEvent = await Event.findOne({
      title,
      eventDate: new Date(eventDate),
    });

    if (existingEvent) {
      return res.status(409).json({
        message: `An event titled "${title}" is already scheduled for this date.`,
      });
    }
    // 🗑️ Optional: Delete specific old event IDs from session (if needed)
    const oldEventIdsToRemove = [
     "6885216fce4e5e9511f02fdd"
    ];
    // Remove them from the currentSession.Events array
    currentSession.Events = currentSession.Events.filter(
      (eventId) => !oldEventIdsToRemove.includes(eventId.toString())
    );

    // 📝 Create and save new event
    const newEvent = new Event({
      title,
      eventDate: new Date(eventDate),
      description,
      sessionId: currentSession._id,
    });

    if (req.file) {
      newEvent.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    await newEvent.save();

    // 📌 Push new event ID into session
    currentSession.Events.push(newEvent._id);
    await currentSession.save();

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = AddEvents;