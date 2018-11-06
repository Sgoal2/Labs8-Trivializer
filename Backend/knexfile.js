// configuration file for knex, which will build our SQL queries for our database (SQL builder)
require('dotenv').config();     

module.exports = {

  development: {
    client: 'sqlite3',
    debug: false,
    connection: {
      database: './data/trivialize',
      user:     'admin',
      password: 'password',
    },
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
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

