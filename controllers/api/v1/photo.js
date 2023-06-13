const Photo = require("../../../models/Photo");
require('moment-timezone');


function getAllPhotos(req, res) {
  
    Photo.find({ })
      .then(result => {
        if (!result) {
          res.status(404).json({
            "status": "failed",
            "error": error,

          });
        } else {
          res.json({
            "status": "success",
            "result": result,

          });
        }
      })
      .catch(err => res.status(500).json(err));
  }

function getPhotoUser(req, res) {
    const { userid } = req.params;
    Photo.find({ userId: userid })
      .then(results => {
        if (results.length === 0) {
          res.status(404).json({ 
            "status": "failed",
            "result": results
          });
        } else {
          res.json({
            "status": "success",
            "result": results.map(result => ({
              "image": result.image,
              "userId": result.userId,
              "houseName": result.houseName,
              "houseId": result.houseId,
              "dateTaken": result.dateTaken,
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

function getPhotoHouse(req, res) {
  const { houseid } = req.params;
  Photo.find({ houseId: houseid })
    .then(results => {
      if (results.length === 0) {
        res.status(404).json({ 
          "status": "failed",
          "result": results
        });
      } else {
        res.json({
          "status": "success",
          "result": results.map(result => ({
            "image": result.image,
            "userId": result.userId,
            "houseId": result.houseId,
            "houseName": result.houseName,
            "dateTaken": result.dateTaken,
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


function createPhoto(req, res) {

  const image = req.body.image;
  const userId = req.body.userId;
  const houseId = req.body.houseId;
  const dateTaken = req.body.dateTaken;

  const houseName = req.body.houseName;
  const likes = req.body.likes;
  const city = req.body.city;
  

  
  const newPhoto = new Photo({
    image: image ,
    userId: userId,
    houseId: houseId,
    dateTaken: dateTaken,

    houseName: houseName,
    likes: likes,
    city: city,
  });

  newPhoto.save().then(result => {

    res.json({
        "status":"succes",
        "result": result,

    });
}).catch(error => {
    res.json({
        "status":"error",
        "message":error,
    });
}); 
}


function changeLikes(req, res) {
    const  {id}  = req.params;
  
    Photo.findByIdAndUpdate(id,  {likes: body.req.likes}  , { new: true })
      .then(result => {
        if (!result) {
          res.status(404).json({ error: 'Photo not found' });
        } else {
          res.json(result);
        }
      })
      .catch(err => res.status(500).json(err));
  }

  function deletePhoto(req, res) {
    const { id } = req.params;
  
    Photo.findByIdAndDelete(id)
      .then(deletePhoto => {
        if (!deletePhoto) {
          res.status(404).json({ error: 'Photo not found' });
        } else {
          res.json(deletePhoto);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getAllPhotos = getAllPhotos;
module.exports.getPhotoUser = getPhotoUser;
module.exports.getPhotoHouse = getPhotoHouse;
module.exports.createPhoto = createPhoto;
module.exports.changeLikes = changeLikes;
module.exports.deletePhoto = deletePhoto;

