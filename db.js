const Sequelize = require("sequelize");

const FilmModel = require("./models/films")
const UserModel = require("./models/users")

const sequelize = new Sequelize("films", "admin", "KtX26zKb", {
    host: "films-db.cfd0h5xpluom.us-east-2.rds.amazonaws.com",
    dialect: "mysql"
  });

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log("Tablas sincronizadas")
})

module.exports = {
    Film,
    User
}