import {createConnection} from "typeorm";
const config = require(__dirname + "./../../ormconfig")

createConnection(config
    // {
    //     "type": "mysql",
    //     "host": "localhost",
    //     "port": 3306,
    //     "username": "root",
    //     "password": "root",
    //     "database": "teste_portal",
    //     "synchronize": true,
    //     "logging": true,
    //     "entities": [
    //         "api/models/**.ts"
    //     ],
    //     "migrations": [
    //         "api/database/migrations/**.ts"
    //     ]
    // }
).catch(error => console.log(error));