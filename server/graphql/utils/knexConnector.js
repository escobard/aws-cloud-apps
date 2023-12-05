import knex from"knex";

export const knexConnector = () => {
    // TODO - improve env variables by making them modular and exportable from /constants directory
    const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
    return knex({
        client: 'pg',
        connection: {
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        }
    })
};