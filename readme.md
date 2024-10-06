## Geting Started

- use docker compose to set up kafka and zookeeper
- run `docker exec -it kafka /bin/sh` to access the kafka container
- get to the folders with the commands `cd ./opt/kafka/bin`
- create a topic called `messages` if not already present


## Kafka Related Commands

### Enter kafka
`docker exec -it kafka /bin/sh`

### Create a kafka topic
`kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic dummy_topic`

### List kafka topics
`kafka-topics.sh --list --zookeeper zookeeper:2181`

### Describe a kafka topic
`kafka-topics.sh --describe --zookeeper zookeeper:2181 --topic dummy_topic`

### Delete a kafka topic
`kafka-topics.sh --delete --zookeeper zookeeper:2181 --topic dummy_topic`

### Send Message on Producer
`kafka-console-producer.sh --broker-list kafka:9092 --topic messages`

> {'user_id':1,'recipient_id':2,'message':'Hi.'}
> {'user_id':2,'recipient_id':1,'message':'Hey.'}

`[ctrl]+c to exit`

### Listen for Messages on Consumer
`kafka-console-consumer.sh --bootstrap-server kafka:9092 --topic messages`

### Listen for Messages on Consumer, list all previous
`kafka-console-consumer.sh --bootstrap-server kafka:9092 --topic messages --from-beginning`