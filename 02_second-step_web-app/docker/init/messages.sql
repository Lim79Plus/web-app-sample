-- create table
CREATE TABLE messages (
    id INTEGER PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    description VARCHAR(500) NOT NULL,
    path VARCHAR(200) NOT NULL,
    created timestamp default CURRENT_TIMESTAMP
);
