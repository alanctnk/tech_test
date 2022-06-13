module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    sold: DataTypes.BOOLEAN,
  });

  return Vehicle;
};