package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/chiku/dashy/app"
	"github.com/gorilla/handlers"
)

// AJAX Request
type dashy struct {
	URL       string   `json:"url"`
	Interests []string `json:"interests"`
}

func dashyHandler(w http.ResponseWriter, r *http.Request) {
	dashy, err := app.NewDashy(r)
	if err != nil {
		errorMsg := "error reading dashy request"
		log.Printf("%s: %s", errorMsg, err)
		http.Error(w, errorMsg, http.StatusBadRequest)
		return
	}

	response, err := http.Get(dashy.URL)
	if err != nil {
		errorMsg := "error fetching data from Gocd"
		log.Printf("%s: %s", errorMsg, err)
		http.Error(w, errorMsg, http.StatusServiceUnavailable)
		return
	}

	goPipelineGroups, err := app.ParseHTTPResponse(response)
	if err != nil {
		errorMsg := "error parsing Gocd response"
		log.Printf("%s: %s", errorMsg, err)
		http.Error(w, errorMsg, http.StatusServiceUnavailable)
		return
	}

	goDashboard := app.GoDashboard{
		PipelineGroups: goPipelineGroups,
		Interests:      dashy.Interests,
	}
	simpleDashboard := goDashboard.ToSimpleDashboard()
	if len(simpleDashboard.Pipelines) == 0 {
		log.Printf("not configured to display any pipelines, you could try to include some of these pipelines: %s", strings.Join(simpleDashboard.Ignores, ", "))
	}

	output, err := json.Marshal(simpleDashboard.Pipelines)
	if err != nil {
		errorMsg := "error marshalling simple dashboard JSON"
		log.Printf("%s: %s", errorMsg, err)
		http.Error(w, errorMsg, http.StatusServiceUnavailable)
		return
	}

	w.Write(output)
}

func main() {
	mux := http.DefaultServeMux
	mux.HandleFunc("/dashy", dashyHandler)
	mux.Handle("/", http.FileServer(http.Dir("./public")))
	loggingHandler := handlers.CombinedLoggingHandler(os.Stdout, mux)
	server := &http.Server{
		Addr:    ":3000",
		Handler: loggingHandler,
	}
	fmt.Println("Starting the application on http://localhost:3000")
	server.ListenAndServe()
}
