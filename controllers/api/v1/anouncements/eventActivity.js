const EventActivity = require("../../../../models/anouncements/EventActivity");

function getEvent(req, res) {
  EventActivity.find()
      .then(event => {
        if (!event) {
          res.status(404).json({ error: 'Event not found' });
        } else {
          res.json(event);
        }
      })
      .catch(err => res.status(500).json(err));
  }

function createEvent(req, res) {
  const creator_id = "1";
  const title = "Yeet";
  const eventDate = new Date();

  const newEvent = new EventActivity({
      creator_id,
      title,
      eventDate,
  });

  newEvent.save()
    .then(event => res.json(event))
    .catch(err => res.status(500).json(err));
}

  function deleteEvent(req, res) {
    const { id } = req.params;
  
    EventActivity.findByIdAndDelete(id)
      .then(event => {
        if (!event) {
          res.status(404).json({ error: 'Event not found' });
        } else {
          res.json(deleteEvent);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getEvent = getEvent;
module.exports.createEvent = createEvent;
module.exports.deleteEvent = deleteEvent;

