package infra

import (
	"database/sql"

	"fmt"
	_ "github.com/lib/pq"
)

// SQLHandler for access db
var SQLHandler *sql.DB

func init() {
	conn, err := sql.Open("postgres", "host=127.0.0.1 port=5432 user=app_user dbname=app_db password=passwd sslmode=disable")
	if err != nil {
		panic(err.Error)
	}
	fmt.Println("successflly get db connect")
	SQLHandler = conn
	migrate()
}
