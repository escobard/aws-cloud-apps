CREATE SCHEMA notes;

-- TODO - remove users table & foreign keys until auth0 w/ google account signin is implemented
CREATE TABLE notes.users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE notes.notes (
    id SERIAL PRIMARY KEY,
    user_id REFERENCES notes.users(id) ON DELETE CASCADE INTEGER NOT NULL,
    subject VARCHAR(250) NOT NULL,
    note VARCHAR(1000) NOT NULL,
    -- TODO - change to pg generated timestamp, add created/updated/removed at columns
    date VARCHAR(25) NOT NULL
);

-- TODO insert a sample note for demo purposes