'use strict';
module.exports = function(sequelize, DataTypes) {
  var Update = sequelize.define('Update', {
    AccountId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        notNull: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Update.hasMany(models.Section);
        Update.hasMany(models.Comment, {
          foreignKey: 'UpdateId'
        });
        Update.hasMany(models.DigestUpdate);
        Update.belongsToMany(models.Digest, {
          through: 'DigestUpdates'
        });
      }
    }
  });
  return Update;
};