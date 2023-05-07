const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // Define columns for the product_tag table
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    tag_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: "tag", 
        key: "id", 
      },
    },
    product_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: "product", // Reference the 'product' table
        key: "id", // Reference the 'id' column in the 'product' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
