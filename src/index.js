const express = require('express')
//configuraciones
const app = express()
const port = 3000

//rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//server y mas
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})