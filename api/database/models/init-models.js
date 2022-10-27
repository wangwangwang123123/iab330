var DataTypes = require("sequelize").DataTypes;
var _hospital = require("./hospital");
var _hospitalnumber = require("./hospitalnumber");
var _room_details = require("./room_details");

function initModels(sequelize) {
  var hospital = _hospital(sequelize, DataTypes);
  var hospitalnumber = _hospitalnumber(sequelize, DataTypes);
  var room_details = _room_details(sequelize, DataTypes);


  return {
    hospital,
    hospitalnumber,
    room_details,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
