const Anouncement = require("../../../models/Anouncement");
const User = require("../../../models/Anouncement")

function getAnouncement(req, res) {
    const  type  = "";
  
    Anouncement.find({ anouncement })
      .then(anouncement => {
        if (!anouncement) {
          res.status(404).json({ error: 'Anouncement not found' });
        } else {
          res.json(anouncement);
        }
      })
      .catch(err => res.status(500).json(err));
  }

function createAnouncement(req, res) {

  const type = "";
  const description = "";
  const creator_id = "";
  const house_id = "";

  const item = "";
  const forWho_id = "";
  const amount = "";
  const percentage = "";
  const paid = "";
  const receiptImage = "";

  const behomieTime = "";
  const datePlanned = "";
  const dateCreated = "";
  const beHomieNotificationTime = "";
  
  const newUser = new User({
    type,
    description,
    creator_id,
    house_id,

    item,
    forWho_id,
    amount,
    percentage,
    paid,
    receiptImage,

    behomieTime,
    datePlanned,
    dateCreated,
    beHomieNotificationTime,
  });

  newAnouncement.save()
    .then(anouncement => res.json(anouncement))
    .catch(err => res.status(500).json(err));
}


function updateAnouncement(req, res) {
    const  {id}  = req.params;
  
    User.findByIdAndUpdate(id,  {type: "NormalAnouncement"}  , { new: true })
      .then(updateUser => {
        if (!updateUser) {
          res.status(404).json({ error: 'Anouncement not found' });
        } else {
          res.json(updateUser);
        }
      })
      .catch(err => res.status(500).json(err));
  }

  function deleteAnouncement(req, res) {
    const { id } = req.params;
  
    User.findByIdAndDelete(id)
      .then(deleteAnouncement => {
        if (!deleteAnouncement) {
          res.status(404).json({ error: 'Anouncement not found' });
        } else {
          res.json(deleteAnouncement);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getAnouncement = getAnouncement;
module.exports.createAnouncement = createAnouncement;
module.exports.updateAnouncement = updateAnouncement;
module.exports.deleteAnouncement = deleteAnouncement;

