const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hospital', {
    internal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    surgical: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pediatrics: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    emergency: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
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
          { name: "id" },
        ]
      },
      {
        name: "ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
