import express from 'express'
import routesClients from './clients/routes.js'
import dataBase from './data-base/db.js'

const app = express()

app.use(express.json())
app.use(routesClients)
dataBase.sync(()=>{
    console.log(`connected database:${process.env.DB_NAME}`)
})

app.listen(3001,() => {
    console.log('running on the port 3001')
})