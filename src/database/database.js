import Sequelize from "sequelize";

//Cambiar pruebas por el nombre de la base de datos del proyecto
export const sequelize = new Sequelize('pruebas', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
})

