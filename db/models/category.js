'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      this.hasMany(models.Card, {
        foreignKey: 'card_id'
      })
    
    }
  }
  Category.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Category;
};