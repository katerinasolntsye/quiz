package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"
	"golang.org/x/crypto/bcrypt"
)

// Create a struct that models the structure of a user, both in the request body, and in the DB
type User struct {
	Password     string `json:"password", db:"password"`
	Name         string `json:"name", db:"name"`
	Email        string `json:"email", db:"email"`
	PayedCourses string `json:"payedCourses", db:"payedCourses"`
	Surname      string `json:"surname", db:"surname"`
	BirthDate    string `json:"birthDate", db:"birthDate"`
	Country      string `json:"country", db:"country"`
	City         string `json:"city", db:"city"`
	Tel          string `json:"tel", db:"tel"`
	Google       string `json:"google", db:"google"`
	Vkontakte    string `json:"vkontakte", db:"vkontakte"`
	Telegram     string `json:"telegram", db:"telegram"`
}

// Для сайта Postman
// {
// 	"name": "john6",
// 	"password": "mysecurepassword",
// 	"email": "john@mail.ru",
// 	"payedCourses": "",
// 	"Surname": "",
// 	"BirthDate": "",
// 	"Country": "",
// 	"City": "",
// 	"Tel": "",
// 	"Google": "",
// 	"Vkontakte": "",
// 	"Telegram": ""
//   }

// func enableCors(w *http.ResponseWriter) {
// 	(*w).Header().Set("Access-Control-Allow-Origin", "*")
// }

func Signup(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	// enableCors(&w)

	// Parse and decode the request body into a new `Credentials` instance
	creds := &User{}
	err := json.NewDecoder(r.Body).Decode(creds)
	if err != nil {
		// If there is something wrong with the request body, return a 400 status
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	// Salt and hash the password using the bcrypt algorithm
	// The second argument is the cost of hashing, which we arbitrarily set as 8 (this value can be more or less, depending on the computing power you wish to utilize)
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(creds.Password), 8)

	// Next, insert the username, along with the hashed password into the database
	if _, err = db.Query("insert into users values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)", creds.Name, string(hashedPassword), creds.Email, creds.PayedCourses, creds.Surname, creds.BirthDate, creds.Country, creds.City, creds.Tel, creds.Google, creds.Vkontakte, creds.Telegram); err != nil {
		log.Print(err)
		// If there is any issue with inserting into the database, return a 500 error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	// We reach this point if the credentials we correctly stored in the database, and the default status of 200 is sent back
	// w.Header().Set("Access-Control-Allow-Origin", "*")
	// w.Header().Set("Access-Control-Allow-Methods", "POST,PATCH,OPTIONS")

	// w.Header().Set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

	// w.Header().Set("Content-Type", "text/html; charset=utf-8")
	// w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	// w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	// return "OKOK"

	user, err := currentUser()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(user)
	// json.NewEncoder(w).Encode("OKOK")
}

func Signin(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	// Parse and decode the request body into a new `Credentials` instance
	creds := &User{}
	err := json.NewDecoder(r.Body).Decode(creds)
	if err != nil {
		// If there is something wrong with the request body, return a 400 status
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	// Get the existing entry present in the database for the given username
	result := db.QueryRow("select password from users where email=$1", creds.Email)
	if err != nil {
		// If there is an issue with the database, return a 500 error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	// We create another instance of `Credentials` to store the credentials we get from the database
	storedCreds := &User{}
	// Store the obtained password in `storedCreds`
	err = result.Scan(&storedCreds.Password)
	if err != nil {
		// If an entry with the username does not exist, send an "Unauthorized"(401) status
		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// If the error is of any other type, send a 500 status
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Compare the stored hashed password, with the hashed version of the password that was received
	if err = bcrypt.CompareHashAndPassword([]byte(storedCreds.Password), []byte(creds.Password)); err != nil {
		// If the two passwords don't match, return a 401 status
		w.WriteHeader(http.StatusUnauthorized)
	}

	// If we reach this point, that means the users password was correct, and that they are authorized
	// The default 200 status is sent

	user, err := currentUser()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(user)
	// json.NewEncoder(w).Encode("OK'n'OK")
}

// func getIncomingPostback(w http.ResponseWriter, r *http.Request) {
// w.Header().Set("Access-Control-Origin", "*")
// w.Header().Set("Content-Type", "application/json")
// 	incoming, err := currentIncoming()
// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		return
// 	}
// 	json.NewEncoder(w).Encode(incoming)
// }

func currentUser() ([]User, error) {
	var Users []User

	res, err := db.Query("SELECT * FROM users")
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	for res.Next() {
		var r User
		err := res.Scan(&r.Password, &r.Name, &r.Email, &r.PayedCourses, &r.Surname, &r.BirthDate, &r.Country, &r.City, &r.Tel, &r.Google, &r.Vkontakte, &r.Telegram)
		if err != nil {
			log.Fatal(err)
		}
		Users = append(Users, r)
	}
	if err := res.Err(); err != nil {
		log.Fatal(err)
	}

	return Users, nil
}
