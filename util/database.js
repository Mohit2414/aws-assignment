const Sequelize = require('sequelize');

const sequelize = new Sequelize("resultManagement","docker","password",{
    dialect: "mysql",
    host: "database-1.cndp1c2zsaim.ap-south-1.rds.amazonaws.com"
});

module.exports = sequelize;
