package main

import (
	"fmt"
	"net/http"
)

func main() {
	// 「/」に対して処理を追加
	http.HandleFunc("/", indexHandler)

	// 8080ポートで起動
	http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// データの返却
	fmt.Fprint(w, "Hello World from Go.")
}
