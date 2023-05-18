const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('users',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  //title:Sequelize.STRING,
  username:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  
  phonenumber:{
    type:Sequelize.NUMBER,
    allowNull:false,
    unique:true
  }

});
module.exports=User;