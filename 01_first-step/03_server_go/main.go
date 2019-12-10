package main

import (
	"log"
	"net/http"
)

func main() {
	// 「/」に対して処理を追加
	http.HandleFunc("/", indexHandler)

	// 8080ポートで起動
	http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// HTTP メソッド
	log.Printf("HTTP Method:%v\n", r.Method)
	// どこからアクセスがあったか
	log.Printf("HTTP Header:%v\n", r.Header["Referer"])
	// アクセスしてきた端末の情報
	log.Printf("User Agent%v\n", r.UserAgent())
}
