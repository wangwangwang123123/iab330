const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hospital', {
    Internal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Surgical: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Pediatrics: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Emergency: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'hospital',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
