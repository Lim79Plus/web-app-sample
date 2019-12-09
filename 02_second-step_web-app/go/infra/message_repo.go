package infra

import (
	"fmt"
	"log"
)

// Message struct
type Message struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Path        string `json:"path"`
	Created     string `json:"lastBuildDate"`
}

// Messages messages
type Messages []Message

// MessageList get messages
func MessageList() Messages {
	// SELECT
	rows, err := SQLHandler.Query("SELECT * FROM messages")

	if err != nil {
		fmt.Println(err)
	}
	defer rows.Close()
	fmt.Println(rows)

	var ml Messages
	for rows.Next() {
		var m Message
		if err := rows.Scan(&m.ID, &m.Title, &m.Description, &m.Path, &m.Created); err != nil {
			fmt.Println(err)
		}
		// names = append(names, name)
		fmt.Println("Log MessgeList", m)
		ml = append(ml, m)
	}
	return ml
}

// MessageInsert insert data
func MessageInsert(msgs Message) {
	statement := "INSERT INTO messages (id, title, description, path) VALUES ($1, $2, $3, $4) RETURNING id"
	stmt, err := SQLHandler.Prepare(statement)
	if err != nil {
		log.Fatal("fail to struct handler", err)
		return
	}
	defer stmt.Close()
	var ID string
	err = stmt.QueryRow(msgs.ID, msgs.Title, msgs.Description, msgs.Path).Scan(&ID)
	if err != nil {
		log.Fatal("fail to insert", err)
		return
	}
	log.Println("MessageInsert id", ID)
}
