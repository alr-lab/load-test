package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	log.Print("starting...")
	defer log.Print("done")

	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handler(res http.ResponseWriter, _ *http.Request) {
	log.Print("handling request")
	fmt.Fprintf(res, "Hello, world!\n")
}
