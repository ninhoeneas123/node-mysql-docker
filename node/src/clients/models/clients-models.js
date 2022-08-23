import {Sequelize } from 'sequelize'
import dataBase from '../../data-base/db.js'

export default dataBase.define('client',{
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false 
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false,
        unique:true,
    }
});