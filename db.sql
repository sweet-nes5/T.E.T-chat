CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    pwd TEXT NOT NULL,
    created_at TEXT  NOT NULL,
);

CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES user(id),
    text TEXT,
    created_at TEXT,
);

SELECT email, pwd FROM user;

SELECT * FROM messages ORDER BY id DESC LIMIT 50;


docker compose
