const Task = require("../../../../models/anouncements/Task");

function getTask(req, res) {
  Task.find()
      .then(task => {
        if (!task) {
          res.status(404).json({ error: 'task not found' });
        } else {
          res.json(task);
        }
      })
      .catch(err => res.status(500).json(err));
  }

function createTask(req, res) {
  const creator_id = "1";
  const title = "Yeet";
  const description = "doe je taak";
  const datePlanned = new Date();
  const dateCreated = new Date();

  const newTask = new Task({
    creator_id,
    title,
    description,
    datePlanned,
    dateCreated,
  });

  newTask.save()
    .then(task => res.json(task))
    .catch(err => res.status(500).json(err));
}

  function deleteTask(req, res) {
    const { id } = req.params;
  
    Task.findByIdAndDelete(id)
      .then(task => {
        if (!task) {
          res.status(404).json({ error: 'Task not found' });
        } else {
          res.json(deleteTask);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getTask = getTask;
module.exports.createTask = createTask;
module.exports.deleteTask = deleteTask;

