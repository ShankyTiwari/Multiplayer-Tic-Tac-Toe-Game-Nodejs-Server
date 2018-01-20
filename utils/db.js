/* 
* @author Shashank Tiwari
* Multiplayer Tic-Tac-Toe Game using Angular, Nodejs
*/
"use strict";

class redisDB{
	
	constructor(){
		this.redis = require("redis");
	}

	connectDB(){
		const client = this.redis.createClient({
				host : '127.0.0.1',
				post : 6379
			});

		client.on("error", (err) => {
    		console.log("Error " + err);
		}); 

		client.on("ready", (err) => {
    		console.log("Ready ");
		});
		
		require('bluebird').promisifyAll(client);
		return client;
	}
}

module.exports = new redisDB();