"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  Recipe.associate = function (models) {
    // associations can be defined here
    //recipe has many instructions
    Recipe.hasMany(models.Instruction, {
      foreignKey: "recipeId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Recipe.hasMany(models.Ingredient, {
      foreignKey: "recipeId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };

  return Recipe;
};
