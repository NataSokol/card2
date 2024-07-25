'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {

    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'card_id'
      })

    }
  }
  Card.init({
    category_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answear: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};