package infra

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
)

func migrate() {
	fmt.Println("migrate start")
	rows, err := SQLHandler.Query("SELECT count(*) FROM messages")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("migrate start check the data count")
	rows.Next()
	var n int
	if err := rows.Scan(&n); err != nil {
		log.Fatal(err)
	}

	if n > 1 {
		return
	}

	fmt.Println("migrate start migrate data")

	// JSONファイル読み込み
	bytes, err := ioutil.ReadFile("./infra/migrate.json")
	if err != nil {
		log.Fatal(err)
	}
	// JSONデコード
	var messages []Message
	if err := json.Unmarshal(bytes, &messages); err != nil {
		log.Fatal(err)
	}
	fmt.Println("json", messages[1])
	for _, msg := range messages {
		MessageInsert(msg)
	}
	log.Println("migrate finished")
}
