const Anouncement = require("../../../models/Anouncement");
const moment = require('moment');
require('moment-timezone');

function getAnnouncement(req, res) {
  const { houseId } = req.params;
  Anouncement.find({ houseId: houseId })
    .then(results => {
      if (results.length === 0) {
        res.status(404).json({ 
          "status": "failed"
        });
      } else {
        res.json({
          "status": "success",
          "result": results.map(result => ({
            "_id": result._id,
            "type": result.type,
            "description": result.description,
            "houseId": result.houseId,
            // Add other properties you want to include
          }))
        });
      }
    })
    .catch(err => res.status(500).json({
      "status": "error",
      "message": err
    }));
}


function createAnouncement(req, res) {

  const type = req.body.type;
  const activity = req.body.type;
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
  
  const newAnouncement = new Anouncement({
    "type": type ,
    "activity": activity,
    "description": description,
    "creatorId": creatorId,
    "houseId": houseId,
    "participants": participants,

    "item": item,
   "forWho_id": forWho_id,
    "amount": amount,
    "percentage": percentage,
    "paid": paid,
    "receiptImage": receiptImage,

    "behomieTime": behomieTime,
    "datePlanned": datePlanned,
    "dateCreated": dateCreated,
    "beHomieNotificationTime": beHomieNotificationTime,
  });

   newAnouncement.save().then(result => {

    res.json({
        "status":"succes",
        "result": result,
        "data": {
          "type": result.type,
          "description": result.description,
          "activity": result.activity,
          "participants": result.participants,
        }
    });
}).catch(error => {
    res.json({
        "status":"error",
        "message":error,
    });
}); 
}


function updateAnouncement(req, res) {
    const  {id}  = req.params;
  
    Anouncement.findByIdAndUpdate(id,  {type: "NormalAnouncement"}  , { new: true })
      .then(result => {
        if (!result) {
          res.status(404).json({ error: 'Anouncement not found' });
        } else {
          res.json(result);
        }
      })
      .catch(err => res.status(500).json(err));
  }

  function deleteAnouncement(req, res) {
    const { id } = req.params;
  
    Anouncement.findByIdAndDelete(id)
      .then(deleteAnouncement => {
        if (!deleteAnouncement) {
          res.status(404).json({ error: 'Anouncement not found' });
        } else {
          res.json(deleteAnouncement);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getAnnouncement = getAnnouncement;
module.exports.createAnouncement = createAnouncement;
module.exports.updateAnouncement = updateAnouncement;
module.exports.deleteAnouncement = deleteAnouncement;

