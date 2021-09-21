module.exports = {
    "type": process.env.DB_CONNECTION,
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "teste_portal",
    "synchronize": true,
    "logging": true,
    "entities": [
        "api/models/**.ts"
    ],
    "migrations": [
        "api/database/migrations/**.ts"
    ]
}