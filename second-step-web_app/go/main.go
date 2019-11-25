package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/Lim79Plus/web-app-sample/go/infra"
)

func main() {
	// 「/」に対して処理を追加
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/msglist", msgListHandler)

	// 8080ポートで起動
	http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World from Go.")
}

func msgListHandler(w http.ResponseWriter, r *http.Request) {
	msgList := infra.MessageList()
	// encode json
	msgJSON, err := json.Marshal(msgList)
	if err != nil {
		fmt.Printf("err %v", err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(msgJSON)

}
