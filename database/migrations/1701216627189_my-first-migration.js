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
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            removed_at TIMESTAMP
        );
        
        INSERT INTO notes.notes(subject, note)
        VALUES('test subject', 'test note');
        `
    )
};

exports.down = pgm => {
    pgm.sql(`
        DROP SCHEMA notes CASCADE;
    `)
};
