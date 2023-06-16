const Anouncement = require("../../../models/Anouncement");
const moment = require("moment");
require("moment-timezone");

function getAnnouncement(req, res) {
  const { houseId } = req.params;
  Anouncement.find({ houseId: houseId })
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({
          status: "failed",
        });
      } else {
        res.json({
<<<<<<< HEAD
          status: "success",
          result: results.map((result) => ({
            _id: result._id,
            type: result.type,
            description: result.description,
            houseId: result.houseId,
=======
          "status": "success",
          "result": results.map(result => ({
            "_id": result._id,
            "type": result.type,
            "description": result.description,
            "houseId": result.houseId,
            "eventName": result.eventName,
            "participants": result.participants,
            "location": result.location,
            "datePlanned": result.datePlanned,
            "dateCreated": result.dateCreated,
            "hour": result.hour,
            "image": result.image,
            "invitationMessage": result.invitationMessage
>>>>>>> 37279e00ee51c80556d87674e1914b124372aec6
            // Add other properties you want to include
          })),
        });
      }
    })
    .catch((err) =>
      res.status(500).json({
        status: "error",
        message: err,
      })
    );
}

function createAnouncement(req, res) {
  const type = req.body.type;
  const activity = req.body.activity;
  const description = req.body.description;
  const creatorId = req.body.creatorId;
  const houseId = req.body.houseId;
  const participants = req.body.participants;

  const item = req.body.item;
  const forWho_id = req.body.forWho_id;
  const amount = req.body.amount;
  const percentage = req.body.percentage;
  const paid = false;
  const receiptImage = req.body.receiptImage;

  const behomieTime = req.body.behomieTime;
  const datePlanned = req.body.datePlanned;
  const dateCreated = req.body.dateCreated;
  const beHomieNotificationTime = req.body.beHomieNotificationTime;

  const eventName= req.body.eventName;
  const location= req.body.location;
  const hour= req.body.hour;
  const image= req.body.image;
  const invitationMessage= req.body.invitationMessage;

  const newAnouncement = new Anouncement({
    type: type,
    activity: activity,
    description: description,
    creatorId: creatorId,
    houseId: houseId,
    participants: participants,
    

    item: item,
    forWho_id: forWho_id,
    amount: amount,
    percentage: percentage,
    paid: paid,
    receiptImage: receiptImage,


    "behomieTime": behomieTime,
    "datePlanned": datePlanned,
    "dateCreated": dateCreated,
    "beHomieNotificationTime": beHomieNotificationTime,


    eventName: eventName,
    participants: participants,
    location: location,
    hour: hour,
    image: image,
    invitationMessage: invitationMessage,
  });

  newAnouncement
    .save()
    .then((result) => {
      res.json({
        status: "succes",
        result: result,
        data: {
          type: result.type,
          description: result.description,
          activity: result.activity,
          participants: result.participants,
          dateCreated: result.dateCreated,
        },
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        message: error,
      });
    });
}

function updateAnouncement(req, res) {
  const { id } = req.params;

  Anouncement.findByIdAndUpdate(
    id,
    { type: "NormalAnouncement" },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        res.status(404).json({ error: "Anouncement not found" });
      } else {
        res.json(result);
      }
    })
    .catch((err) => res.status(500).json(err));
}

function deleteAnouncement(req, res) {
  const { id } = req.params;

  Anouncement.findByIdAndDelete(id)
    .then((deleteAnouncement) => {
      if (!deleteAnouncement) {
        res.status(404).json({ error: "Anouncement not found" });
      } else {
        res.json(deleteAnouncement);
      }
    })
    .catch((err) => res.status(500).json(err));
}

module.exports.getAnnouncement = getAnnouncement;
module.exports.createAnouncement = createAnouncement;
module.exports.updateAnouncement = updateAnouncement;
module.exports.deleteAnouncement = deleteAnouncement;
