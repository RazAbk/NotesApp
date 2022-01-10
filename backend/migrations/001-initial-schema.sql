-- Up

CREATE TABLE users (
  _id TEXT PRIMARY KEY UNIQUE,
  user_name TEXT,
  password TEXT
);

CREATE TABLE notes (
  _id TEXT PRIMARY KEY UNIQUE,
  userid TEXT,
  title TEXT,
  body TEXT
);

-- Down

DROP TABLE users;
DROP TABLE notes;