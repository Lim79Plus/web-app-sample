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
	// HTTP メソッド
	fmt.Printf("HTTP Method:%v\n", r.Method)
	// どこからアクセスがあったか
	fmt.Printf("HTTP Header:%v\n", r.Header["Referer"])
	// アクセスしてきた端末の情報
	fmt.Printf("User Agent%v\n", r.UserAgent())
}
