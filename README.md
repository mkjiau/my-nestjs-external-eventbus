# my-nestjs-external-eventbus

### Install
```sh
# npm i # in src/app
# npm i # in src/event-service-rabbit
# npm i # in src/event-service-redis
```

### Run
```sh
docker-compose up -d # at project root

docker logs -f nestjs-event-service-rabbit
#docker logs -f nestjs-event-service-redis

curl -k "https://localhost:3000/contrived?aaa=123&bbb=312" # in other terminal
```

##### What you see 
```sh
[Nest] 25   - 05/28/2020, 5:40 PM   [event-service: ] ContrivedEventHandler: event

[Nest] 25   - 05/28/2020, 5:40 PM   [event-service: ] Object:
{
  "aaa": "123",
  "bbb": "312"
}
```

### RabbitMQ
* http://localhost:8000
* amqp://rabbit:rabbit@rabbitmq:5672



### Refs
* https://docs.nestjs.com/recipes/cqrs
* https://github.com/kamilmysliwiec/nest-cqrs-example
* [nestjs-transport-eventbus](https://github.com/sergey-telpuk/nestjs-transport-eventbus) 
* https://dev.to/sergey_telpuk/transport-eventbus-for-nestjs-1cnh
* https://github.com/nestjs/cqrs/pull/12
* https://github.com/nestjs/docs.nestjs.com/issues/1239
* https://dzone.com/articles/microservices-with-cqrs-and-event-sourcing
* https://otonomo.io/blog/redis-kafka-or-rabbitmq-which-microservices-message-broker-to-choose/
* https://kknews.cc/zh-tw/news/xpr39y9.html