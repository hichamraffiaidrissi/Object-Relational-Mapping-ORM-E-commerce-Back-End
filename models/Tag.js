const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // Define columns for the tag table
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    tag_name: {
      type: DataTypes.STRING, // Set the data type to STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;