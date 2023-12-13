/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `
            CREATE SCHEMA notes;
            
            CREATE TABLE notes.notes (
                id SERIAL PRIMARY KEY,
                subject VARCHAR(250) NOT NULL,
                note VARCHAR(1000) NOT NULL,
                -- TODO - change to pg generated timestamp, add created/updated/removed at columns
                date VARCHAR(25) NOT NULL
            );
            
            INSERT INTO notes.notes(subject, note, date)
            VALUES('test subject', 'test note', '12/08/23, 6:57 AM');
        `
    )
};

exports.down = pgm => {
    pgm.sql(`
        DROP SCHEMA notes CASCADE;
    `)
};
