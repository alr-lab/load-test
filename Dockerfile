FROM golang:1.16-alpine AS builder

WORKDIR /go/src/github.com/alr-lab/load-test

COPY . /go/src/github.com/alr-lab/load-test

RUN go build -o server

FROM alpine:3.13

COPY --from=builder /go/src/github.com/alr-lab/load-test/server /server

CMD ./server