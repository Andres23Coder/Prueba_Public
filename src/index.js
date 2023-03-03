import app from './app.js'
import { sequelize } from './database/database.js'


function main() {
  sequelize.authenticate()
    .then(() => {
      console.log('Conectado')
      app.listen(4000)
      console.log("Server is running on port", 4000)
    })
    .catch(err => {
      console.log('No se conecto', err)
    })
}

main()