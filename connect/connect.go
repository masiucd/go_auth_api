package connect

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"log"
)

var DB *sql.DB

func ConnectDb() {
	db, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		panic(err.Error())
	}

	if err := db.Ping(); err != nil {
		log.Fatal(err)
	}

	DB = db

}
