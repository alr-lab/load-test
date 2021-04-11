package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	log.Print("starting...")
	defer log.Print("done")

	http.HandleFunc("/foo", foo)
	http.HandleFunc("/bar", bar)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func foo(res http.ResponseWriter, _ *http.Request) {
	log.Printf("handling %q request", "foo")
	fmt.Fprintln(res, "Hello, world!")
}

func bar(res http.ResponseWriter, _ *http.Request) {
	log.Printf("handling %q request", "bar")
	fmt.Fprintln(res, "1337")
}
