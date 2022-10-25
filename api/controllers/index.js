const { sequelize } = require("../database/models");
const db = require("../database/models");

const initModels = require("../database/models/init-models");

var models= initModels(sequelize)
/* const models = require('../database/models') */

const getAllLocations = async (req,res)=>{
	try{
	/* 	const city = await models.city.findAll({where:{CountryCode:"AFG"}}) */

		//  const name = await models.names.findAll({where:{name : "wang"}})  
	const name  = await models.names.findAll() 
	
		return res.status(200).send(name);
	}catch(error){
		return res.status(500).send(error.message)
	}
}

module.exports={
	getAllLocations
}