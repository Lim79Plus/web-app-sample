package infra

import (
	"fmt"
)

// Message struct
type Message struct {
	MessageID string `json:"id"`
	Auther    string `json:"auther"`
	Body      string `json:"body"`
	ImagePath string `json:"path"`
	Created   string `json:"created"`
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
		if err := rows.Scan(&m.MessageID, &m.Auther, &m.Body, &m.ImagePath, &m.Created); err != nil {
			fmt.Println(err)
		}
		// names = append(names, name)
		fmt.Println("Log MessgeList", m)
		ml = append(ml, m)
	}
	return ml
}
