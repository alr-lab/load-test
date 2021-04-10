# Load test

[![GoDoc](https://godoc.org/github.com/alr-lab/load-test?status.svg)](https://godoc.org/github.com/alr-lab/load-test)
[![Go Report Card](https://goreportcard.com/badge/github.com/alr-lab/load-test)](https://goreportcard.com/report/github.com/alr-lab/load-test)

## CLI

1. Getting started

    ```
    $ docker-compose up -d server
    ```

2. Usage

    ```
    $ docker run -i --net=host loadimpact/k6 run - <script.js
    ```

## Dashboard

1. Getting started

    ```
    $ docker-compose up -d
    ```

2. Usage

    ```
    $ docker run --net=host -i loadimpact/k6 \
        run --out influxdb=http://localhost:8086/load - <script.js
    ```

    Dashboard is available at http://localhost:3000/d/ooH6ce_Mz/load-test

![Screenshot from 2021-04-10 03-25-12](https://user-images.githubusercontent.com/9620174/114253849-67cf5e00-99ac-11eb-880e-bdbb7fe07bc0.png)