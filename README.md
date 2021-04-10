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

```
$ docker-compose up -d
```

Access http://localhost:3000/?orgId=1 to list dashboards and access the
_Load test_ dashboard

```
$ docker run --net=host -i loadimpact/k6 run --out influxdb=http://localhost:8086/load - <script.js
```