import Express from "express";
import clients from "./controller/clients.js"
import  { body, validationResult } from 'express-validator'

const routesClients = Express.Router()

routesClients.get('/find-all-clients', clients.findAll),
    routesClients.post('/create-client',clients.addClient),
    routesClients.put('/update-client/:id', clients.updateClient),
    routesClients.delete('/delete-client/:id', clients.deleteClient)

export { routesClients as default }