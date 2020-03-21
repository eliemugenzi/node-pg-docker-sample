require('dotenv/config');

module.exports={
  "development": {
    "dialect": "postgres",
    "operatorsAliases": false,
    "use_env_variable": "DATABASE_URL"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
