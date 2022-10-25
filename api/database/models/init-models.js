var DataTypes = require("sequelize").DataTypes;
var _names = require("./names");

function initModels(sequelize) {
  var names = _names(sequelize, DataTypes);


  return {
    names,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
