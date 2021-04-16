# Load test

[![GoDoc](https://godoc.org/github.com/alr-lab/load-test?status.svg)](https://godoc.org/github.com/alr-lab/load-test)
[![Go Report Card](https://goreportcard.com/badge/github.com/alr-lab/load-test)](https://goreportcard.com/report/github.com/alr-lab/load-test)

In this repository we explore load tests. It consists of what Bob Wescott
described as the practice of modeling the expected usage of a software program
by simulating multiple users accessing the program concurrently.

Using _virtual users_, we request our applications using different patterns
we will describes below. Each _virtual user_ simulate a user session and may
perform tests on the response.

## Tools

We are using [k6][k6] as the load test tool to describe and run our load
tests. Using [Grafana][grafana] and [InfluxDB][influxdb] we are following the
actual tests such as the application throughput, the number of virtual users,
the response time... And by using [Docker][docker] and
[docker-compose][docker-compose], we are able to ship everything easily so
that you can play with the [k6 script](/script.js) without having to worry
about how to install all those tools.

## Getting started

```
$ docker-compose up -d
```

## Usage

```
$ docker run --net=host -i loadimpact/k6 \
    run --out influxdb=http://localhost:8086/load - <script.js
```

Dashboard is available at http://localhost:3000/d/ooH6ce_Mz/load-test

![Screenshot from 2021-04-16 20-22-47](https://user-images.githubusercontent.com/9620174/115067672-8cb65a80-9ef1-11eb-812a-dd85817ecc4b.png)

[k6]: https://k6.io/
[grafana]: https://grafana.com/
[influxdb]: https://www.influxdata.com/
[docker]: https://www.docker.com/
[docker-compose]: https://docs.docker.com/compose/
