// configuration file for knex, which will build our SQL queries for our database (SQL builder)
require('dotenv').config();     

module.exports = {

  development: {
    client: 'sqlite3',
    debug: false,
    connection: {
      filename: './data/trivializer.sqlite3',
      user:     'admin',
      password: 'password',
    },
    
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

