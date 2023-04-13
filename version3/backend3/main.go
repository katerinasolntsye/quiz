package main

import (
	// "config"
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/jackc/pgx/v4"
	"golang.org/x/crypto/bcrypt"
)

type IncomingPostback struct {
	Id        int       `db:"id"`
	TrackerId int       `db:"trackerid"`
	CnvStatus string    `db:"cnv_status"`
	Payout    float64   `db:"payout"`
	Currency  string    `db:"currency"`
	UrlQuery  string    `db:"url_query"`
	RequestIp string    `db:"request_ip"`
	CreatedAt time.Time `db:"created_at"`
	ClickId   string    `db:"clickid"`
}
type Tracker struct {
	Id               int    `db:"id"`
	IsActive         int    `db:"is_active"`
	TrackerName      string `db:"tracker_name"`
	PostbackTemplate string `db:"postback_template"`
}
type SendPostback struct {
	Id                 int       `db:"id"`
	IncomingPostbackId int       `db:"incoming_postback_id"`
	TrackerId          int       `db:"tracker_id"`
	RequestUrl         string    `db:"request_url"`
	ResponseBody       string    `db:"response_body"`
	ResponceCode       int       `db:"responce_code"`
	CreatedAt          time.Time `db:"created_at"`
}
type SendPostbackFailed struct {
	Trackername sql.NullString `db:"tracker_name"`
}
type Storage struct {
	db *pgx.Conn
}

type Credentials struct {
	Password string `json:"password", db:"password"`
	Username string `json:"username", db:"username"`
}

func envOr(envor, or string) string {
	if os.Getenv(envor) != "" {
		return os.Getenv(envor)
	}
	return or
}

func main() {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, envOr(os.Getenv("DB_CONN"), "postgres://root:12312@localhost:5432/test_db"))
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}
	defer conn.Close(ctx)
	str := &Storage{db: conn}
	r := mux.NewRouter()
	// GET
	r.HandleFunc("/incoming", str.getIncomingPostback)
	r.HandleFunc("/tracker", str.getTracker)
	r.HandleFunc("/sendpostback", str.getSendPostback)

	// r.HandleFunc("/signin", str.Signin)
	r.HandleFunc("/signup", str.Signup)
	// r.HandleFunc("/sendpostbackfailed", str.getTracker)
	log.Fatal(http.ListenAndServe(":8000", r))
}

// curl -H "Content-Type: application/json" -d "{\"username\": \"johndoe\", \"password\": \"mysecurepassword\"}" http://localhost:8000/signup

// func GeneratePostgresDatabaseURL(conf config.DBConfig) string {
// 	return fmt.Sprintf("postgres://%s:%s@%s:%d/%s?sslmode=%s",
// 		conf.User,
// 		conf.Password,
// 		conf.Host,
// 		conf.Port,
// 		conf.Name,
// 		conf.SSLMode,
// 	)
// }

func (s *Storage) getIncomingPostback(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	incoming, err := s.currentIncoming()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(incoming)
}

func (s *Storage) getTracker(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	tracker, err := s.currentTracker()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(tracker)
}

func (s *Storage) getSendPostback(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	spb, err := s.currentSendPostback()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(spb)
}

// func (s *Storage) getSendPostbackFailed(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Access-Control-Origin", "*")
// 	w.Header().Set("Content-Type", "application/json")
// 	spbfailed, err := s.currentSendPostbackFailed()
// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		return
// 	}
// 	json.NewEncoder(w).Encode(spbfailed)
// }
func (s *Storage) currentIncoming() ([]IncomingPostback, error) {
	var Incoming []IncomingPostback

	res, err := s.db.Query(context.Background(), "SELECT * FROM incoming_postback")
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	for res.Next() {
		var r IncomingPostback
		err := res.Scan(&r.Id, &r.TrackerId, &r.CnvStatus, &r.Payout, &r.Currency, &r.UrlQuery, &r.RequestIp, &r.CreatedAt, &r.ClickId)
		if err != nil {
			log.Fatal(err)
		}
		Incoming = append(Incoming, r)
	}
	if err := res.Err(); err != nil {
		log.Fatal(err)
	}

	return Incoming, nil
}

func (s *Storage) currentTracker() ([]Tracker, error) {
	var currentTracker []Tracker

	res, err := s.db.Query(context.Background(), "SELECT * FROM tracker")
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	for res.Next() {
		var r Tracker
		err := res.Scan(&r.Id, &r.IsActive, &r.TrackerName, &r.PostbackTemplate)
		if err != nil {
			log.Fatal(err)
		}
		currentTracker = append(currentTracker, r)
	}
	if err := res.Err(); err != nil {
		log.Fatal(err)
	}

	return currentTracker, nil
}

// func (s *Storage) currentTracker() ([]Tracker, error) {
// 	var currentTracker []Tracker

// 	db, err := sql.Open("mysql", dsn("pb_reciever_db"))
// 	if err != nil {
// 		log.Fatal(err)
// 		return currentTracker, err
// 	}

// 	rows, err := db.Query("SELECT * FROM tracker")
// 	if err != nil {

// 		return currentTracker, err
// 	}

// 	for rows.Next() {
// 		t := Tracker{}
// 		err = rows.Scan(&t.Trackername)
// 		if err != nil {
// 			log.Fatal(err)
// 			return currentTracker, err
// 		}
// 		currentTracker = append(currentTracker, t)
// 	}
// 	return currentTracker, nil
// }

func (s *Storage) currentSendPostback() ([]SendPostback, error) {
	var currentSendPostback []SendPostback

	res, err := s.db.Query(context.Background(), "SELECT * FROM send_postback")
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	for res.Next() {
		var r SendPostback
		err := res.Scan(&r.Id, &r.IncomingPostbackId, &r.TrackerId, &r.RequestUrl, &r.ResponseBody, &r.ResponceCode, &r.CreatedAt)
		if err != nil {
			log.Fatal(err)
		}
		currentSendPostback = append(currentSendPostback, r)
	}
	if err := res.Err(); err != nil {
		log.Fatal(err)
	}

	return currentSendPostback, nil
}

// func (s *Storage) currentSendPostback() ([]Tracker, error) {
// 	var currentTracker []Tracker

// 	// db, err := sql.Open("mysql", dsn("pb_reciever_db"))
// 	// if err != nil {
// 	// 	log.Fatal(err)
// 	// 	return currentTracker, err
// 	// }

// 	rows, err := db.Query("SELECT * FROM tracker")
// 	if err != nil {

// 		return currentTracker, err
// 	}

// 	for rows.Next() {
// 		t := Tracker{}
// 		err = rows.Scan(&t.Trackername)
// 		if err != nil {
// 			log.Fatal(err)
// 			return currentTracker, err
// 		}
// 		currentTracker = append(currentTracker, t)
// 	}
// 	return currentTracker, nil
// }

func (s *Storage) Signup(w http.ResponseWriter, r *http.Request) {
	// Parse and decode the request body into a new `Credentials` instance
	creds := &Credentials{}
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
	if _, err = s.db.Query(context.Background(), "insert into users(username, password) values ($1, $2)", creds.Username, string(hashedPassword)); err != nil {
		// If there is any issue with inserting into the database, return a 500 error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	// We reach this point if the credentials we correctly stored in the database, and the default status of 200 is sent back
}
