const sqlite3 = require('sqlite3').verbose();

// @ts-ignore
const db = new sqlite3().Database('./note', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.log(err);
});
