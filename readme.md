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


## Textual TUI
- A python application made with the textual framework
- Text User Interface (TUI)
- https://textual.textualize.io/
- sends information to the go backend to be relayed to kafka

![Python Textual Kafka App](https://github.com/ProgrammerSteve/kafkaDemo/blob/main/images/pythonTextualKafkaApp.png)

## React Real-time Display
- Uses socket.io to get feedback from node server
- The style was created using the ARWES theme library
- https://next.arwes.dev/docs/develop/react

![React Real-Time Kafka App](https://github.com/ProgrammerSteve/kafkaDemo/blob/main/images/reactRealTimeKafkaApp.png)


## Consumer Node Server
- connects to kafka on localhost:9091 on the 'messages' topic
- uses socket.io to communicate with the react frontend
- acts as a consumer for kafka

## Producer Go Server
- uses the gin framework to set up endpoints
- connect to kafka on localhost:9091 on the 'messages' topic
- acts as a producer for kafka