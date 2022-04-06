CREATE TABLE IF NOT EXISTS users(
    id          BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),c
    mail        VARCHAR(255) UNIQUE NOT NULL,
    pass        VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS notes(
    id              BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
    title           varchar(15),
    description     varchar(255),
    status          varchar(10)

);