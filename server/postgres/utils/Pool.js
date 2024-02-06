const pg = require('pg');

class Pool {
  _pool = null;

  async connect(options) {
    this._pool = new pg.Pool(options);

    // validates that the database is healthy with a simple query
    const response = await this._pool.query('SELECT 1+1')

    if (response) {
      return response;
    } else {
      throw new Error('Error connecting to database')
    }

  }

  close(){
    return this._pool.end();
  }

  query(sql, variables) {
    return this._pool.query(sql, variables);
  }

}

// exported as class object to allow direct object calls and avoid class invocation
module.exports = new Pool();