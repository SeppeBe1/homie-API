const BeHomie = require("../../../models/BeHomie");

function getBehomie(req, res) {
    BeHomie.find()
      .then(beHomie => {
        if (!beHomie) {
          res.status(404).json({ error: 'Behomie not found' });
        } else {
          res.json(beHomie);
        }
      })
      .catch(err => res.status(500).json(err));
  }

function createBeHomie(req, res) {
  const creator_id = "1";
  const image = "";
  const caption = "dit is ne hennige foto";
  const city = "Turnhout";
  const postalcode = "2300";
  const street = "LangeWappersStraat";
  const dateCreate = new Date();
  
  const newBeHomie = new BeHomie({
    creator_id,
    image,
    caption,
    city,
    postalcode,
    street,
    dateCreate
  });

  newBeHomie.save()
    .then(beHomie => res.json(beHomie))
    .catch(err => res.status(500).json(err));
}

  function deleteBehomie(req, res) {
    const { id } = req.params;
  
    BeHomie.findByIdAndDelete(id)
      .then(beHomie => {
        if (!beHomie) {
          res.status(404).json({ error: 'beHomie not found' });
        } else {
          res.json(deleteBehomie);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getBehomie = getBehomie;
module.exports.createBeHomie = createBeHomie;
module.exports.deleteBehomie = deleteBehomie;

