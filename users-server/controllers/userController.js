const User = require('../models/User');
const UserClass = require('../modules/UserClass');
// import { v4 as uuidv4 } from 'uuid';

exports.new = (req, res) => {
  try{
    var data = req.body.data;
    const user = new UserClass({
      ...data
    });
    user
      .save()
      .then(data => {
        res.json({status: true, users: data});
      })
      .catch((err) => {
        res.json({status: false, error: err});
      });
  }catch(err){
    res.json({status: false, error: err});
  }
}

exports.update = (req, res) => {
  try{
    console.log("user updates");
    var data = req.body.data;
    const user = new UserClass({
      ...data
    });

    user
      .update()
      .then(data => {
        res.json({status: true, users: data});
      })
      .catch((err) => {
        res.json({status: false, error: err});
      });
  }catch(err){
    res.json({status: false, error: err});
  }
}

exports.get = (req, res) => {
    UserClass.getUsers()
    .then(users => {
      console.log("::::::::::::::::::::::::");
      console.log(users);
      res.json({users: users});
    })
    .catch(error => {
      res.json({error: 'error message '+error});
    });
}

exports.details = (req, res) => {
  try{
    var data =req.params;
    console.log(data);
    const user = new UserClass({
      ...data
    });
    user.getUserDetails()
    .then(data => {
      console.log(":::::::::User Details::::::::::");
      console.log(JSON.stringify(data));
      res.json(data);
    })
    .catch(error => {
      res.json({error: "Error: "+error});
    });
  }catch(error){
    res.json({error: "Error: "+error});
  }
}

exports.delete = (req, res) => {
  try{
    var data =req.body.data;
    console.log(data);
    const user = new UserClass({
      ...data
    });
    console.log("to delete IDs: "+JSON.stringify(data.id));
    user.deleteUser()
    .then(users => {
      console.log(":::::::::New Data::::::::::");
      console.log(" s"+JSON.stringify(users));
      res.json({users: users});
    })
    .catch(error => {
      res.json({error: "Error: "+error});
    });
  }catch(error){
    res.json({error: "Error: "+error});
  }
}