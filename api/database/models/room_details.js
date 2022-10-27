const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room_details', {
    ID: {
      type: DataTypes.STRING(45),
      allowNull: true,
      primaryKey: true
    },
    Room_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    visitor_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patient_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    timestamp: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'room_details',
    timestamps: false
  });
};
