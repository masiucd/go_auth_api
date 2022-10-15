package main

import (
	"fmt"
	"go_auth/connect"
)

type User struct {
	id        int
	firstname string
	lastname  string
}

func main() {

	connect.ConnectDb()
	DB := connect.DB
	defer DB.Close()
	statement, _ := DB.Prepare("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, firstname TEXT, lastname TEXT)")
	statement.Exec()
	statement, _ = DB.Prepare("INSERT INTO people (firstname, lastname) VALUES (?, ?)")
	statement.Exec("Nic", "Raboy")

	rows, _ := DB.Query("SELECT id, firstname, lastname FROM people")

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

	statement, _ = DB.Prepare("DROP TABLE people")
	statement.Exec()
}
