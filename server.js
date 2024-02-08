const express = require ('express')
const cors = require('cors')
const appertizerController = require('./Controllers/AppetizerController')
const entreeController = require('./Controllers/EntreesController')
const dessertController = require('./Controllers/DessertsController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.send({ msg: 'Server Running' })
  })

app.listen(PORT, () => {
    console.log(`Express server listing on port ${PORT}`)

})


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

  app.get('/appetizers',appertizerController.getAllAppertizer)

  app.get('/appetizers/:id',appertizerController.getAppertizerById)

  
  app.get('/entrees',entreeController.getAllEntrees)

  app.get('/entrees/:id',entreeController.getEntreesById)

  
  app.get('/desserts',dessertController.getAllDesserts)

  app.get('/desserts/:id',dessertController.getDessertsById)