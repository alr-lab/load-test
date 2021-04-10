# Load test

## Getting started

```
$ docker-compose up -d server
```

## Usage

```
$ docker run -i --net=host loadimpact/k6 run - <script.js
```

## Monitor

Start InfluxDB and Grafana

```
$ docker-compose up -d
```

You need to run the load-test with the `--out influxdb=<host>` option to send
the results to visualize them on Grafana

```
$ docker run --net=host -i loadimpact/k6 run --out influxdb=http://localhost:8086/load - <script.js
```

Dashboard is available at http://localhost:3000/d/ooH6ce_Mz/load-test