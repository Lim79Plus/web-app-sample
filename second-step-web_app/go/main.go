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
	http.HandleFunc("/msg", msgListHandler)

	// 8080ポートで起動
	http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World from Go.")
}

func msgListHandler(w http.ResponseWriter, r *http.Request) {
	header(w)
	msgList := infra.MessageList()
	// encode json
	msgJSON, err := json.Marshal(msgList)
	if err != nil {
		fmt.Printf("err %v", err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(msgJSON)

}

func header(w http.ResponseWriter) {
	// reactはlocalhost:3000,goのWebアプリはlocalhost:8080で起動しているため
	// ブラウザ上では別のドメインから双方アクセスしているクロスドメイン扱いになります

	//リモートアドレスからのアクセスを許可する
	w.Header().Set("Access-Control-Allow-Origin", "*")
	//認証を行う
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
	//必要なメソッドを許可する
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
}
