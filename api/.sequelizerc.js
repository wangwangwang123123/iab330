const path = require('path')

module.exports={
	config: path.resolve("./database/config","config.js"),
	"models-path":path.resolve("./database"),
	"migrations-path": path.resolve("./database/migrations")

}