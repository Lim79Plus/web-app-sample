package infra

import (
	"fmt"
)

// Message struct
type Message struct {
	ID          string `json:"id"`
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
