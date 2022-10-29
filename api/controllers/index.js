const { sequelize } = require("../database/models");
const db = require("../database/models");

//生成models：
/* 
https://www.npmjs.com/package/sequelize-auto
npx sequelize-auto -o "./models" -d World -h localhost -u root -p 3305 -x 981020 -e mysql

*/
const initModels = require("../database/models/init-models");

var models= initModels(sequelize)
/* const models = require('../database/models') */


//find rooms use department
const test = async (req,res)=>{
	try{
		console.log(req.params.query)
	/* 	const city = await models.city.findAll({where:{CountryCode:"AFG"}}) 
		const internalMedical = await models.hosipital.findAll({where:{department:"Internal Medical"}}) 
	console.log(req.query) */
	/* 	const Department = await models.names.findAll({where:{Department :req.params.query}})   */
		  	const name  = await models.names.findAll()  
		return res.status(200).send(name);
	}catch(error){
		return res.status(500).send(error.message)
	}
} 


//find rooms use department id
 const getDepartmentRooms = async (req,res)=>{
	try{
		console.log(req.params.query)
		const Department = await models.room_details.findAll({where:{category:req.params.query}})  

		return res.status(200).send(Department);
	}catch(error){
		return res.status(500).send(error.message)
	}
} 
//department data
/*  const getDepartment = async (req,res)=>{
	try{

		console.log("first")
		const departments = await models.room_details.findAll()  

		return res.status(200).send(departments);
	}catch(error){
		return res.status(500).send(error.message)
	}
}  */

//room data
const getSingleRoom = async (req,res)=>{
	try{
	
		console.log(req.params.category)
		console.log(req.params.idd)

		
		const Rooms = await models.room_details.findAll({where:{category:req.params.category,room_id: req.params.idd }})  

		return res.status(200).send(Rooms);
	}catch(error){
		return res.status(500).send(error.message)
	}
} 


//总人数
//
const getTotalNum = async (req,res)=>{
	try{
		
		const Rooms = await models.hospitalnumber.findAll()  

		return res.status(200).send(Rooms);
	}catch(error){
		return res.status(500).send(error.message)
	}
} 



const getDepartmentNum = async (req,res)=>{
	try{
		
		const Rooms = await models.hospital.findAll()  

		return res.status(200).send(Rooms);
	}catch(error){
		return res.status(500).send(error.message)
	}
} 






module.exports={
	getDepartmentRooms,

	getSingleRoom,
	getDepartmentNum,
	getTotalNum,
	test
}