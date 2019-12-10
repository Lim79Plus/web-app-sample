package main

import (
	"net/http"
	"text/template"
)

func main() {
	// 「/」に対して処理を追加
	http.HandleFunc("/", indexHandler)

	// 8080ポートで起動
	http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// データの返却
	t := template.Must(template.ParseFiles("./index.tpl"))
	data := struct {
		Message string
	}{
		Message: "Hello World! TONKATSU!!",
	}

	err := t.Execute(w, data)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
