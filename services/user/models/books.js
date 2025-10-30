'use strict';
const {
  Model,Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books.hasMany(models.Chapter,{foreignKey: 'bookId'})
      books.belongsTo(models.Language,{foreignKey: 'languageId'})
    }
  }
  books.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.literal("gen_random_uuid()"),
      allowNull: false,
      primaryKey: true,
    },
    languageId: {
      type: DataTypes.UUID,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     coverImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
  });
  return books;
};