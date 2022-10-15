package main

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
)

type User struct {
	id        int
	firstname string
	lastname  string
}

func main() {

	db, _ := sql.Open("sqlite3", "./data.db")
	statement, _ := db.Prepare("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, firstname TEXT, lastname TEXT)")
	statement.Exec()
	statement, _ = db.Prepare("INSERT INTO people (firstname, lastname) VALUES (?, ?)")
	statement.Exec("Nic", "Raboy")

	rows, _ := db.Query("SELECT id, firstname, lastname FROM people")

	var users []User
	for rows.Next() {
		var u User
		err := rows.Scan(&u.id, &u.firstname, &u.lastname)
		if err != nil {
			panic(err.Error())
		}
		users = append(users, u)
	}

	fmt.Println("Users:", users[0])

	statement, _ = db.Prepare("DROP TABLE people")
	statement.Exec()

	defer db.Close()

}
