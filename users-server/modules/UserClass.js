const User = require('../models/User');
// const User = localStorage.setItem('users', []);

class UserClass {
  constructor (data) {
    this.id = data.id || "";
    this.username = data.username;
    this.name = data.name;
    this.contactNumber = data.contactNumber;
    this.email = data.email;
  }

  save () {
    return new Promise ((resolve) => {
      User.push(this);
      resolve(User);
    }); // end promise
  }
  

  getUserDetails () {
    return new Promise (resolve => {
      const data = User.find(prop => prop.id ==this.id);
      resolve(data);
    })
  }

  update (){
    return new Promise ((resolve, reject) => {
      try {
        var index = User.findIndex(prop => prop.id==this.id);
        console.log(index);
        if(index>=0){
          console.log("the index: "+index);
          User[index] = this
        }
        resolve(User);
      } catch (error) {
        reject(error);
      }
    }); // end promise
  }

  deleteUser(){
    return new Promise ((resolve, reject) => {
      try{
        const ids = this.id;
        console.log(this.id);
        ids.forEach(id => {
          console.log(id);
          // var index = User.map(function(e){
          //     console.log("the id: "+e.id);
          //     return e.id
          // }).indexOf(id);
          var index = User.findIndex(prop => prop.id==parseInt(id));
          if(index>=0){
            console.log("the index: "+index);
            User.splice(index,1);
          }
        });
        resolve(User);
      }catch(e){
        reject(e);
      }
    }); // end promise
  }

  ///================ static methods ======================
    static getUsers () {
      return new Promise ((resolve, reject) => {
        resolve(User);
      })
    }

  }

module.exports = UserClass;