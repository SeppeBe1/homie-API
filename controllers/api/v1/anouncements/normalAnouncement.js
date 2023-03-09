const NormalAnouncement = require("../../../../models/anouncements/NormalAnouncement");

function getNormalAnouncement(req, res) {
    NormalAnouncement.find()
      .then(normalAnouncement => {
        if (!normalAnouncement) {
          res.status(404).json({ error: 'NormalAnouncement not found' });
        } else {
          res.json(normalAnouncement);
        }
      })
      .catch(err => res.status(500).json(err));
  }

function createNormalAnouncement(req, res) {
  const creator_id = "1";
  const title = "Yeet";
  const description = "description yeet";
  const dateCreated = new Date();

  const newNormalAnouncement = new NormalAnouncement({
      creator_id,
      title,
      description,
      dateCreated,
  });

  newNormalAnouncement.save()
    .then(normalAnouncement => res.json(normalAnouncement))
    .catch(err => res.status(500).json(err));
}

  function deleteNormalAnouncement(req, res) {
    const { id } = req.params;
  
    NormalAnouncement.findByIdAndDelete(id)
      .then(normalAnouncement => {
        if (!normalAnouncement) {
          res.status(404).json({ error: 'NormalAnouncement not found' });
        } else {
          res.json(deleteNormalAnouncement);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getNormalAnouncement = getNormalAnouncement;
module.exports.createNormalAnouncement = createNormalAnouncement;
module.exports.deleteNormalAnouncement = deleteNormalAnouncement;

