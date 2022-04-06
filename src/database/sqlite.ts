const sqlite3 = require('sqlite3').verbose();

export const db = new sqlite3().Database(
    './note',
    sqlite3.OPEN_READWRITE,
    // @ts-ignore
    (err) => {
        if (err) return console.log(err);
    }
);
