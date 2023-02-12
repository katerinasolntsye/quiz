package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

const hashCost = 8

var db *sql.DB

func main() {
	// "Signin" and "Signup" are handler that we will implement
	http.HandleFunc("/signin", Signin)
	http.HandleFunc("/signup", Signup)
	// initialize our database connection
	initDB()
	// start the server on port 8000
	log.Fatal(http.ListenAndServe(":8001", nil))
}

func initDB() {
	var err error
	// Connect to the postgres db
	//you might have to change the connection string to add your database credentials
	db, err = sql.Open("postgres", "dbname=habrdb host=localhost port=5432 user=habrpguser password=pgpwd4habr sslmode=disable")
	// dbname=mydb sslmode=disable
	// dbname=testsignup sslmode=disable
	// "postgres://root:12312@localhost:5432/test_db"
	// user=root password=12345 dbname=name sslmode=disable
	// postgres://root:12312@localhost:5432/testsignup
	fmt.Println(db)
	if err != nil {
		log.Print(err)
		panic(err)
	}
}
