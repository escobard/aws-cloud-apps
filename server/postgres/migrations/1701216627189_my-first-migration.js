/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `
        CREATE SCHEMA notes;
        
        -- TODO - remove users table & foreign keys until auth0 w/ google account signin is implemented
        CREATE TABLE notes.users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(100) NOT NULL
        );
        
        CREATE TABLE notes.notes (
            id SERIAL PRIMARY KEY,
            -- user column is reserved, therefore double quotes around column name are required
            --- should avoid this naming to avoid conflicts with reserved pg table names
            "user" INTEGER NOT NULL REFERENCES notes.users(id),
            subject VARCHAR(250) NOT NULL,
            note VARCHAR(1000) NOT NULL,
            -- TODO - change to pg generated timestamp, add created/updated/removed at columns
            date VARCHAR(25) NOT NULL
        );
        
        -- TODO insert a sample note for demo purposes
        INSERT INTO notes.users(email)
        VALUES('escobard90@gmail.com');
        
        INSERT INTO notes.notes("user", subject, note, date)
        VALUES(1, 'test subject', 'test note', '12/08/23, 6:57 AM');
        `
    )
};

exports.down = pgm => {
    pgm.sql(`
        DROP SCHEMA notes CASCADE;
    `)
};
